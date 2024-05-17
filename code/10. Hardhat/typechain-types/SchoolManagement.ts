/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace SchoolManagement {
  export type StudentStruct = {
    isActive: boolean;
    studentAddress: AddressLike;
    studentName: string;
    classId: BigNumberish;
  };

  export type StudentStructOutput = [
    isActive: boolean,
    studentAddress: string,
    studentName: string,
    classId: bigint
  ] & {
    isActive: boolean;
    studentAddress: string;
    studentName: string;
    classId: bigint;
  };

  export type TeacherStruct = {
    isActive: boolean;
    teacherAddress: AddressLike;
    teacherName: string;
    classId: BigNumberish;
  };

  export type TeacherStructOutput = [
    isActive: boolean,
    teacherAddress: string,
    teacherName: string,
    classId: bigint
  ] & {
    isActive: boolean;
    teacherAddress: string;
    teacherName: string;
    classId: bigint;
  };
}

export interface SchoolManagementInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addressToStudent"
      | "addressToTeacher"
      | "assignHomeroom"
      | "assignStudent"
      | "changeStudentStatus"
      | "changeTeacherStatus"
      | "classIdToClass"
      | "classes"
      | "createClass"
      | "delegatePrincipal"
      | "getAllStudents"
      | "getAllTeachers"
      | "principal"
      | "register"
      | "students"
      | "teachers"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "StatusChanged"): EventFragment;

  encodeFunctionData(
    functionFragment: "addressToStudent",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addressToTeacher",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "assignHomeroom",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "assignStudent",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeStudentStatus",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "changeTeacherStatus",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "classIdToClass",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "classes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "createClass", values: [string]): string;
  encodeFunctionData(
    functionFragment: "delegatePrincipal",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllStudents",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllTeachers",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "principal", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "students",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "teachers",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addressToStudent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressToTeacher",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assignHomeroom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assignStudent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeStudentStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeTeacherStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "classIdToClass",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "classes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createClass",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegatePrincipal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllStudents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllTeachers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "principal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "students", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "teachers", data: BytesLike): Result;
}

export namespace StatusChangedEvent {
  export type InputTuple = [_address: AddressLike, _isActive: boolean];
  export type OutputTuple = [_address: string, _isActive: boolean];
  export interface OutputObject {
    _address: string;
    _isActive: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SchoolManagement extends BaseContract {
  connect(runner?: ContractRunner | null): SchoolManagement;
  waitForDeployment(): Promise<this>;

  interface: SchoolManagementInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addressToStudent: TypedContractMethod<
    [arg0: AddressLike],
    [
      [boolean, string, string, bigint] & {
        isActive: boolean;
        studentAddress: string;
        studentName: string;
        classId: bigint;
      }
    ],
    "view"
  >;

  addressToTeacher: TypedContractMethod<
    [arg0: AddressLike],
    [
      [boolean, string, string, bigint] & {
        isActive: boolean;
        teacherAddress: string;
        teacherName: string;
        classId: bigint;
      }
    ],
    "view"
  >;

  assignHomeroom: TypedContractMethod<
    [_teacher: AddressLike, _classId: BigNumberish],
    [void],
    "nonpayable"
  >;

  assignStudent: TypedContractMethod<
    [_student: AddressLike, _classId: BigNumberish],
    [void],
    "nonpayable"
  >;

  changeStudentStatus: TypedContractMethod<
    [_student: AddressLike],
    [void],
    "nonpayable"
  >;

  changeTeacherStatus: TypedContractMethod<
    [_teacher: AddressLike],
    [void],
    "nonpayable"
  >;

  classIdToClass: TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, string] & { classId: bigint; className: string }],
    "view"
  >;

  classes: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  createClass: TypedContractMethod<[_class: string], [void], "nonpayable">;

  delegatePrincipal: TypedContractMethod<
    [_newPrincipal: AddressLike],
    [void],
    "nonpayable"
  >;

  getAllStudents: TypedContractMethod<
    [],
    [SchoolManagement.StudentStructOutput[]],
    "view"
  >;

  getAllTeachers: TypedContractMethod<
    [],
    [SchoolManagement.TeacherStructOutput[]],
    "view"
  >;

  principal: TypedContractMethod<[], [string], "view">;

  register: TypedContractMethod<
    [_name: string, _role: BigNumberish],
    [void],
    "nonpayable"
  >;

  students: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  teachers: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addressToStudent"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [boolean, string, string, bigint] & {
        isActive: boolean;
        studentAddress: string;
        studentName: string;
        classId: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "addressToTeacher"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [boolean, string, string, bigint] & {
        isActive: boolean;
        teacherAddress: string;
        teacherName: string;
        classId: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "assignHomeroom"
  ): TypedContractMethod<
    [_teacher: AddressLike, _classId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "assignStudent"
  ): TypedContractMethod<
    [_student: AddressLike, _classId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "changeStudentStatus"
  ): TypedContractMethod<[_student: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "changeTeacherStatus"
  ): TypedContractMethod<[_teacher: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "classIdToClass"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, string] & { classId: bigint; className: string }],
    "view"
  >;
  getFunction(
    nameOrSignature: "classes"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "createClass"
  ): TypedContractMethod<[_class: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "delegatePrincipal"
  ): TypedContractMethod<[_newPrincipal: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getAllStudents"
  ): TypedContractMethod<[], [SchoolManagement.StudentStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getAllTeachers"
  ): TypedContractMethod<[], [SchoolManagement.TeacherStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "principal"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "register"
  ): TypedContractMethod<
    [_name: string, _role: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "students"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "teachers"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  getEvent(
    key: "StatusChanged"
  ): TypedContractEvent<
    StatusChangedEvent.InputTuple,
    StatusChangedEvent.OutputTuple,
    StatusChangedEvent.OutputObject
  >;

  filters: {
    "StatusChanged(address,bool)": TypedContractEvent<
      StatusChangedEvent.InputTuple,
      StatusChangedEvent.OutputTuple,
      StatusChangedEvent.OutputObject
    >;
    StatusChanged: TypedContractEvent<
      StatusChangedEvent.InputTuple,
      StatusChangedEvent.OutputTuple,
      StatusChangedEvent.OutputObject
    >;
  };
}
