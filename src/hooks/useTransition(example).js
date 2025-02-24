import { useTransition, useState } from 'react';

function StartTransitionExample() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        startTransition(() => {
            const filtered = largeDataset.filter((item) => item.includes(value));
            setResults(filtered);
        });
    };

    return (
        <div>
            <input value={query} onChange={handleChange} />
            {isPending && <p>Loading...</p>}
            <ul>{results.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
    );
}