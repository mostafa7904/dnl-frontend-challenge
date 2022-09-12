import { MutationTree } from 'vuex';
import { CompaniesState, Company } from '@/types/companies-types';

const companiesMutations: MutationTree<CompaniesState> = {
  DELETE_COMPANY(state, companyId: string) {
    state.companies = state.companies?.filter(
      company => company.companyId !== companyId,
    ) as Company[];
  },
};

export default companiesMutations;
