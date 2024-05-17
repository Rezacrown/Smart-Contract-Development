import { assert } from "chai";
import { ethers } from "hardhat";
import { SchoolManagement } from './../typechain-types/SchoolManagement';


describe("School Management Basic Test", function() {
    let factory: any;
    let schoolManagement: SchoolManagement;

    beforeEach(async function() {
        factory = await ethers.getContractFactory("SchoolManagement");
        schoolManagement = await factory.deploy();
    });

    it("Deploy success", async function() {
        console.log("Address :", await schoolManagement.getAddress());
        assert.isOk(await schoolManagement.getAddress());
    });

    it("Register Student", async function() {
        const txn = await schoolManagement.register("Marsha", 0);

        const allStudents = await schoolManagement.getAllStudents();

        assert.equal(allStudents[0][2], "Marsha");
    })
})