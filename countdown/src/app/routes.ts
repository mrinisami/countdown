type route = Record<pageNames, string>;
export type pageNames = 'ranking' | 'play' | 'numberSelection';

export const routes: route = { ranking: '/ranking', play: '/play', numberSelection: 'numberSelection' }