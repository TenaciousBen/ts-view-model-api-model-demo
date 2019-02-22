import { getOrganisation, saveOrganisation } from "./api/organisation";
import { OrganisationViewModel } from "./models/organisation/view";
import { exists } from "./utilities/value";
import { OrganisationApiModel } from "./models/organisation/api";

const organisationCosts = [
	{ id: 1, costs: 800, revenue: 1000 },
	{ id: 2, costs: 8000, revenue: 1000 }
];

async function main(): Promise<void> {
	let organisation = await getOrganisation(1);
	if (!exists(organisation)) throw "couldn't load org 1";
	let organisationCost = organisationCosts.find(o => o.id === organisation!.id);
	if (!organisationCost) throw "couldn't find costs for org 1";
	let viewModel = new OrganisationViewModel(organisation, organisationCost.costs, organisationCost.revenue);
	viewModel.name = "something else";
	let apiModel = new OrganisationApiModel(viewModel);
	saveOrganisation(apiModel);
}

main();