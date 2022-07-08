import {IBilling} from "./IBilling";

export interface ICustomer {
    firstname: string
    lastname: string
    company: string
    email: string
    phone: string
    comment: string
    billing?: IBilling[]
}