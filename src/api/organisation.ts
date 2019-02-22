import { OrganisationApiModelResponse } from "../models/organisation/api";
import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { exists } from "../utilities/value";

const call = async <T>(request: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
	let response = await Axios(request);
	return response as AxiosResponse<T>;
}

export const getOrganisation = async (organisationId: number): Promise<OrganisationApiModelResponse | null> => {
	let response = await call<OrganisationApiModelResponse[]>({
		url: "https://my-json-server.typicode.com/TenaciousBen/json-server/organisations",
	});
	let organisation = response.data.find(d => d.id === organisationId);
	return organisation || null; 
};

export const saveOrganisation = async (organisation: OrganisationApiModelResponse): Promise<void> => {
	if (!exists(organisation) || !exists(organisation.id)) throw "cannot save null organisations or organisations with null IDs";
	await call<any>({
		url: "https://my-json-server.typicode.com/TenaciousBen/json-server/organisations/" + organisation.id,
		data: organisation
	});
};