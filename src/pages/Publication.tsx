import { ReactElement, useEffect, useState } from 'react';

import { GridLoader } from 'react-spinners';
import {
  LiteratureEntry,
  Literatures,
  LiteratureAuthor,
} from 'react-paper-list';
import axios from 'axios';

export function Publication(): ReactElement {
  const [papers, setPapers] = useState([] as LiteratureEntry[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPromise = new Promise<LiteratureEntry[]>((resolve) => {
      axios
        .get(
          'https://castlelab.github.io/selected-publications/public/bundle.json',
        )
        .then((resp) => {
          console.log('Fetched data: ', resp.data);
          const papers: LiteratureEntry[] = resp.data.map(
            (d: any, index: number) => {
              return {
                id: index,
                title: d.title,
                date: new Date(d.date),
                type: 'Conference Paper',
                authors: d.authors.map((a: any) => {
                  return {
                    lastName: a,
                    firstName: '',
                  } as LiteratureAuthor;
                }),
                venue: d.venue,
                venueShort: d.venueShort,
                tags: d.tags,
                awards: d.awards,
                paperUrl: d.paperUrl,
                abstract: d.abstract,
                bibtex: d.bibtex,
                projectUrl: d.projectUrl,
                slidesUrl: d.slidesUrl,
              } as unknown as LiteratureEntry;
            },
          );
          resolve(papers);
        });
    });

    fetchPromise.then((r) => {
      setPapers(r);
      setLoading(false);
    });
  }, []);

      return (
    <div className="container">
      <div style={{ minHeight: 200 }}>
        {loading ? (
          <div
            style={{
              position: 'relative',
              marginTop: 100,
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '20px',
            }}
          >
            <GridLoader color="#5dc9c9" />
          </div>
        ) : (
          <Literatures
            title={'Selected Publication'}
            description={''}
            entries={papers}
            listHeader={'Published Papers'}
            defaultSortCriterion="date"
            defaultReverse={true}
            // enableSort
            // enableFilter
            enableSearch
            enableScrollTopButton
          />
        )}
      </div>
    </div>
  );
}
