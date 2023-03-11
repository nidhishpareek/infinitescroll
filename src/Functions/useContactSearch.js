import { useEffect, useState } from "react";
import axios from "axios";

export default function useContactSearch(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [contacts, setContacts] = useState([]);
  const noOfResults = 10;
  const [seed, setSeed] = useState(undefined);
  //   params: { q: query, page: pageNumber },
  //   https://randomuser.me/api/?seed=a7e0b1f3fd1c9621&results=20&page=303

  useEffect(() => {
    setLoading(true);
    setError(false);
    setTimeout(() => {
      axios({
        method: "GET",
        url: `https://randomuser.me/api/`,
        params: { seed: seed, page: pageNumber, results: noOfResults },
      })
        .then((res) => {
          setContacts((prev) => {
            console.log(res.data.results);
            return [...prev, ...res.data.results];
          });
          !seed && setSeed(res.data.info.seed);
          console.log(seed);
          setLoading(false);
        })
        .catch((e) => {
          setError(true);
        });
    }, 1000);
  }, [pageNumber]);

  return { loading, error, contacts };
}
