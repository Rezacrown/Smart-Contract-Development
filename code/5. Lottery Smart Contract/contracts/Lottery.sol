// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Lottery {

    address payable public manager;

    // [] = karena ini adalah kumpulan address
    // tipenya payable karena saat ada player yang menang, smart contract akan mengirim sejumlah eth ke address player tersebut
    // jadi kata kunci payable disini hanya untuk menentukan apakah addressnya itu akan menerima sejumlah eth dari smart contract atau tidak
    // kalau tidak butuh, maka kita butuh kata kunci payable ini
    // arraynya dibuat dynamic array
    address payable[] public players;

    // constructor adalah function yang dipanggil sekali saat smart contract dideploy
    constructor() {
        // manager adalah variabel yang menyimpan address dari orang yang deploy smart contract
        // msg adalah global variabel yang mengandung properties terkait interaksi atau kegiatan mengakses smart contract
        // .sender adalah memgambil addres dari orang yang memanggil sebuah function dalam smart contract
        manager = payable(msg.sender);
    }

    // function untuk enter lotterynya
    // tipenya itu payable digunakan kalau saat function dipanggil, pemanggil juga bisa mengirimkan sejumlah eth ke smart contract
    // sedangkan external digunakan kalau functionnya hanya akan dipanggil dari luar smart contract
    // karena untuk enter lottery ini, bukan smart contract yang memanggil, tetapi address dari user/player yang memanggil dari luar makanya kita pakai external
    // function enter() payable external {
    //     // kita masukkan address dari player yang memanggil function ini ke dalam array players
    //     // push itu untuk memasukkan data ke dalam array
    //     // msg bisa dipanggil dimana saja, karena msg adalah global variabel
    //     // kita juga memberikan typecast payable agar addressnya juga menjadi payable
    //     // karena msg.sender tipenya barhanya berupa address biasa saja
    //     // sedangkan kita butuh address yang tipenya payable
    //     players.push(payable(msg.sender));
    // }

    // Jadi kalau kita menggunakan function enter,
    // player yang mengirim sejumlah eth, hanya bisa terdaftar sebagai player
    // kalau mereka memanggil function enter ini
    // sedangkan kalau kita ubah ke fallback function (salah satunya receive function)
    // maka semua address yang mengirim sejumlah eth ke smart contract ini akan terdaftar sebagai player
    // namun receive hanya bisa digunakan kalau kita menggunakan versi solidity 0.6 ke atas
    // tujuannya untuk handle transaksi dimana seseorang mengirim sejumlah eth dan tidak mengirim data langsung ke smart contract address
    // atau dengan kata lain mengirim sejumlah eth tanpa memanggil function apapun
    receive() payable external {
        // require ini digunakan untuk memvalidasi apakah suatu statement itu benar atau tidak
        // atau boolean statement
        // bisa menggunakan satuan ether atau satuan wei
        require(payable(msg.sender) != manager, "Manager can't enter the lottery");
        require(msg.value == 0.01 ether, "Must be is 0.01ETH to enter the lottery");
        players.push(payable(msg.sender));
    }

    // tujuannya untuk mempermudah melihat isi array players
    // dibuat public view karena mungkin bisa dilihat di dalam contract dan mungkin bisa dipanggil dari luar contract
    // dikasih view karena cuman return data saja
    // reference type wajib ada data locationnya
    // karena mau di return, maka kita harus kasih memory
    function getPlayers() public onlyManager view returns (address payable[] memory) {
        return players;
    }

    // function membalikkan angka random
    // internal digunakan agar orang luar tidak bisa tahu angka random yang dihasilkan itu apa, kita ingin hanya smart contract yang bisa tahu
    // bisa juga kita set sebagai private
    // perbedaan internal dan private adalah internal bisa diakses oleh contract turunan, sedangkan private tidak bisa diakses oleh contract turunan
    function randomizer() internal view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.prevrandao, block.timestamp, players)));
    }

    function pickWinner() public onlyManager {
        require(players.length >= 3, "Need at least 3 players to pick a winner");
        uint index = randomizer() % players.length;
        address payable winner = players[index];

        // kita kirimkan sejumlah eth dari smart contract ke address manager
        manager.transfer(address(this).balance / 10);
        
        // kita kirimkan sejumlah eth dari smart contract ke address pemenang
        winner.transfer(address(this).balance);

        // kita kosongkan array players
        players = new address payable[](0);
    }

    modifier onlyManager() {
        require(msg.sender == manager, "Only manager can pick a winner");
        _;
    }
}