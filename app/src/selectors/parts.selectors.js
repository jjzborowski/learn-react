export const getParts = state => state.parts;
export const getPartsData = state => getParts(state).data;
export const getPartById = (state, id) => getPartsData(state)[id];
