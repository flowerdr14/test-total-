
export const getLocalData = <T>(key: string): T[] => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const saveLocalData = <T extends { id: string }>(key: string, items: T[]) => {
  localStorage.setItem(key, JSON.stringify(items));
};

export const addLocalDoc = <T extends { id: string }>(key: string, item: T) => {
  const data = getLocalData<T>(key);
  const newData = [item, ...data];
  saveLocalData(key, newData);
  return newData;
};

export const updateLocalDoc = <T extends { id: string }>(key: string, id: string, updates: Partial<T>) => {
  const data = getLocalData<T>(key);
  const newData = data.map(item => item.id === id ? { ...item, ...updates } : item);
  saveLocalData(key, newData);
  return newData;
};

export const deleteLocalDoc = <T extends { id: string }>(key: string, id: string) => {
  const data = getLocalData<T>(key);
  const newData = data.filter(item => item.id !== id);
  saveLocalData(key, newData);
  return newData;
};
