import axios from 'axios';
import { useState, useCallback } from 'react';

import type { Domain } from 'types/domains';

const DOMAINS_API = 'https://domain-node-88852dc28831.herokuapp.com/api/v1/domains';

type useSearchReturn = {
  isLoading: boolean;
  domains: Domain[] | null;
  query: (term: string, { tlds }: { tlds: string[] }) => void;
};

const useSearch = (): useSearchReturn => {
  const [isLoading, setloading] = useState<boolean>(false);
  const [domains, setDomains] = useState<Domain[] | null>(null);

  const query = useCallback((term: string, { tlds }: { tlds: string[] }) => {
    setloading(true);

    axios
      .get(DOMAINS_API, { params: { desc: term, tlds: tlds } })
      .then(res => setDomains(res.data.domains))
      .catch(console.error)
      .finally(() => setloading(false));
  }, []);

  return {
    isLoading,
    domains,
    query,
  };
};

export default useSearch;