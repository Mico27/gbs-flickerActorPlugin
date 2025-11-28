const l10n = require("../helpers/l10n").default;

export const id = "EVENT_ENABLE_ACTOR_FLICKER";
export const name = "Enable actor flicker";
export const groups = ["EVENT_GROUP_ACTOR"];

export const autoLabel = (fetchArg) => {
  return `Enable actor flicker`;
};

export const fields = [  
  
];

export const compile = (input, helpers) => {
  const { appendRaw, _addComment } = helpers;
  
  _addComment("Enable actor flicker");
      		
  appendRaw("VM_SET_CONST_UINT8 _disable_flicker, 0");
  
};
