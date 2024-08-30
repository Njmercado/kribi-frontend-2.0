import './index.css';
import { useEffect, useState } from 'react';
import { BaseSearcher, MultiSelect } from '../../atoms';

export interface FilterSearcherProps<T extends object, K extends keyof T> {
  items: Array<T>
  onChange: (value: Array<T>) => void
  bgColor?: string
  placeholder: string
  options: Array<string> | { [key: string]: string } | any
  propertyToFilterBy: K
  filterByOptions: (value: Array<T>, chosenOptions: Array<string>) => Array<T>
}

export default function FilterSearcher<T extends object, K extends keyof T>({
  items,
  onChange,
  bgColor = 'var(--white)',
  placeholder,
  options,
  propertyToFilterBy,
  filterByOptions
}: FilterSearcherProps<T, K>) {
  const [searchQuery, setSearchQuery] = useState('');
  const [chosenOptions, setChosenOptions] = useState<Array<string>>([]);
  const [initialItems, setInitialItems] = useState<Array<T>>([])

  useEffect(() => { setInitialItems(items) }, [])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterDocuments(query, chosenOptions);
  };

  const handleOnMultiSelectChange = (options: Array<string>) => {
    setChosenOptions(options)
    filterDocuments(searchQuery, options);
  };

  const filterDocuments = (query: string, chosenOptionsProp: Array<string>) => {
    const filteredDocumentsByValue: Array<T> = filterByValue(query)
    const filteredDocumentsByOpions = filterByOptions(filteredDocumentsByValue, chosenOptionsProp)
    onChange(filteredDocumentsByOpions);
  };

  const filterByValue = (query: string): Array<T> => {

    if (query.length === 0) return initialItems;

    return initialItems.filter((item: T) => {
      const valueToCompare = (item[propertyToFilterBy] as string).toLowerCase();
      const queryLower = query.toLowerCase();
      return valueToCompare.includes(queryLower);
    });
  }

  return (
    <BaseSearcher
      placeholder={placeholder}
      onChange={handleSearch}
      action={<MultiSelect options={options} onChange={handleOnMultiSelectChange} />}
      bgColor={bgColor}
    />
  )
};
