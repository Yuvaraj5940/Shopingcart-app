export const initLoadingState = [];
export const LoadingReduser = (
  state = initLoadingState,
  { type, meta },
) => {
  const match = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type);
  if (!match) return state;
  const [, actionName, actionType] = match;
  if (actionType === 'REQUEST') {
    return [...state, { actionName, ...meta }];
  }
  // const { [actionName]: an, ...rest } = state;
  // return rest;
  return state.filter(
    (x) => x.id === (meta?.id || -1) && x.actionName === actionName,
  );
};
