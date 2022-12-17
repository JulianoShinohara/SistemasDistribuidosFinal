// This interface is used to define the methods that will be used in the repository
import ICreateAddressDTO from "../dtos/ICreateAddressDTO";

export default interface IAddressesRepository {
    create(data:ICreateAddressDTO): Promise<any>; 
}