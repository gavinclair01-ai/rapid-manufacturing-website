export type City = {
  slug: string;
  name: string;
  state: string;
  stateShort: string;
  population: string;
};

export const cities: City[] = [
  { slug: 'sydney', name: 'Sydney', state: 'New South Wales', stateShort: 'NSW', population: '5.3M' },
  { slug: 'melbourne', name: 'Melbourne', state: 'Victoria', stateShort: 'VIC', population: '5.2M' },
  { slug: 'brisbane', name: 'Brisbane', state: 'Queensland', stateShort: 'QLD', population: '2.5M' },
  { slug: 'perth', name: 'Perth', state: 'Western Australia', stateShort: 'WA', population: '2.1M' },
  { slug: 'adelaide', name: 'Adelaide', state: 'South Australia', stateShort: 'SA', population: '1.4M' },
  { slug: 'canberra', name: 'Canberra', state: 'Australian Capital Territory', stateShort: 'ACT', population: '450K' },
  { slug: 'gold-coast', name: 'Gold Coast', state: 'Queensland', stateShort: 'QLD', population: '700K' },
  { slug: 'newcastle', name: 'Newcastle', state: 'New South Wales', stateShort: 'NSW', population: '550K' },
  { slug: 'wollongong', name: 'Wollongong', state: 'New South Wales', stateShort: 'NSW', population: '310K' },
  { slug: 'geelong', name: 'Geelong', state: 'Victoria', stateShort: 'VIC', population: '275K' },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
