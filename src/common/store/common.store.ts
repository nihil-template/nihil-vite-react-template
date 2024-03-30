import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type CommonState = {
  test: string;
};

export const commonStore = create(
  persist<CommonState>(
    () => ({
      test: '',
    }),
    {
      name: 'project/common-state',
      skipHydration: true,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export function setTest(value: string) {
  commonStore.setState({
    test: value,
  });
}
