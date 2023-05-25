export const initErrorState = [];

export const errorReducer = (
  state = initErrorState,
  { type, meta },
) => {
  if (type === 'REMOVE_ERROR') {
    // const { [meta]: key, ...rest } = state;
    return state.filter((x) => x.id === meta.id);
  }

  const match = /(.*)_(REQUEST|FAIL)/.exec(type);

  if (!match) return state;

  const [, actionName, actionType] = match;

  if (actionType === 'FAIL') {
    return [...state, { ...meta, actionName }];
  }

  // const { [actionName]: an, ...rest } = state;

  return state.filter(
    (x) => x.id === (meta?.id || -1) && x.actionName === actionName,
  );
};
