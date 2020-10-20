// 一般规则的键
const d_mo_data = [
  ['h', 'left_arrow'],
  ['j', 'down_arrow'],
  ['k', 'up_arrow'],
  ['l', 'right_arrow'],
  ['m', 'delete_forward'],
  ['n', 'delete_or_backspace'],
  ['1', '1', ['left_shift']],
  ['2', '2', ['left_shift']],
  ['3', '3', ['left_shift']],
  ['4', '4', ['left_shift']],
  ['5', '5', ['left_shift']],
  ['6', '6', ['left_shift']],
  ['7', '7', ['left_shift']],
  ['8', '8', ['left_shift']],
  ['9', '9', ['left_shift']],
  ['0', '0', ['left_shift']],
  ['grave_accent_and_tilde', 'grave_accent_and_tilde', ['left_shift']],
  ['hyphen', 'hyphen', ['left_shift']],
  ['equal_sign', 'equal_sign', ['left_shift']],
  ['open_bracket', 'open_bracket', ['left_shift']],
  ['close_bracket', 'close_bracket', ['left_shift']],
  ['backslash', 'backslash', ['left_shift']],
  ['semicolon', 'semicolon', ['left_shift']],
  ['quote', 'quote', ['left_shift']],
  ['comma', 'comma', ['left_shift']],
  ['period', 'period', ['left_shift']],
  ['slash', 'slash', ['left_shift']],
  // ['left_arrow', 'f16', ['left_control', 'left_option', 'left_command']],
  // ['right_arrow', 'f19', ['left_control', 'left_option', 'left_command']],
  // ['down_arrow', 'f17', ['left_control', 'left_option', 'left_command']],
  // ['up_arrow', 'f18', ['left_control', 'left_option', 'left_command']],
  ['return_or_enter', 'return_or_enter', ['left_command']],
]

const v_mo_data = [
  ['h', 'left_arrow', ['left_shift']],
  ['j', 'down_arrow', ['left_shift']],
  ['k', 'up_arrow', ['left_shift']],
  ['l', 'right_arrow', ['left_shift']],
  ['left_command', 'left_command'],
  ['right_command', 'left_command'],
]

const disable_settings_data = [
  // ["delete_or_backspace"],
  // ["7", "shift"],
  // ["8", "shift"],
  // ["9", "shift"],
  // ["0", "shift"],
  // ["grave_accent_and_tilde", "shift"],
  // ["hyphen", "shift"],
  // ["equal_sign", "shift"],
  // ["open_bracket", "shift"],
  // ["close_bracket", "shift"],
  // ["backslash", "shift"],
  // ["semicolon", "shift"],
  // ["quote", "shift"],
  // ["comma", "shift"],
  // ["period", "shift"],
  // ["slash", "shift"]
]

const normal_characters_data = [
  'a',
  'b',
  'c',
  'e',
  'f',
  'g',
  'i',
  'o',
  'p',
  'q',
  'r',
  't',
  'u',
  'w',
  'x',
  'y',
  'z',
]

// 特殊规则
const dKey = {
  type: 'basic',
  from: {
    key_code: 'd',
    modifiers: {
      optional: ['any'],
    },
  },
  to: [
    {
      set_variable: {
        name: 'd_mo',
        value: 1,
      },
    },
  ],
  to_if_alone: [
    {
      key_code: 'd',
    },
  ],
  to_after_key_up: [
    {
      set_variable: {
        name: 'd_mo',
        value: 0,
      },
    },
  ],
}

const sKey = {
  type: 'basic',
  from: {
    key_code: 's',
    modifiers: {
      optional: ['any'],
    },
  },
  to: [
    {
      key_code: 'left_option',
    },
  ],
  conditions: [
    {
      type: 'variable_if',
      name: 'd_mo',
      value: 1,
    },
  ],
}

const vKey = {
  type: 'basic',
  from: {
    key_code: 'v',
    modifiers: {
      optional: ['any'],
    },
  },
  to: [
    {
      set_variable: {
        name: 'v_mo',
        value: 1,
      },
    },
  ],
  to_if_alone: [
    {
      key_code: 'vk_none',
    },
  ],
  to_after_key_up: [
    {
      set_variable: {
        name: 'v_mo',
        value: 0,
      },
    },
  ],
  conditions: [
    {
      type: 'variable_if',
      name: 'd_mo',
      value: 1,
    },
  ],
}

const vJ = {
  type: 'basic',
  from: {
    key_code: 'j',
    modifiers: {
      mandatory: ['option'],
    },
  },
  to: [
    {
      key_code: 'down_arrow',
      modifiers: ['left_shift'],
    },
  ],
  to_after_key_up: [
    {
      key_code: 'vk_none',
    },
  ],
  conditions: [
    {
      type: 'variable_if',
      name: 'v_mo',
      value: 1,
    },
  ],
}

const vK = {
  type: 'basic',
  from: {
    key_code: 'k',
    modifiers: {
      mandatory: ['option'],
    },
  },
  to: [
    {
      key_code: 'up_arrow',
      modifiers: ['left_shift'],
    },
  ],
  to_after_key_up: [
    {
      key_code: 'vk_none',
    },
  ],
  conditions: [
    {
      type: 'variable_if',
      name: 'v_mo',
      value: 1,
    },
  ],
}

const vDisableOtherKey = {
  type: 'basic',
  from: {
    any: 'key_code',
  },
  to: [
    {
      key_code: 'vk_none',
    },
  ],
  conditions: [
    {
      type: 'variable_if',
      name: 'v_mo',
      value: 1,
    },
  ],
}

// 所有 一般规则的键 的集合
const whole_data = [d_mo_data, v_mo_data, disable_settings_data, normal_characters_data]

// 所有 一般规则的生成方程 的集合
const funcArr = [
  generate_d_mo_single_rule,
  generate_v_mo_single_rule,
  generate_disable_settings_single_rule,
  generate_normal_characters_single_rule,
]

// 总的生成方程(包括一般规则和特殊规则), 需要区分顺序,顺序是: dKey => sKey => vKey =>  vJ => vK => d_mo的所有规则 => v_mo的所有规则 => vDisableOtherKey => 所有的disable_settings => 所有的normal_character
function generate() {
  // new
  return whole_data.reduce(
    (result, curr, currIndex) => {
      curr.map((v, vIndex) => {
        const singleRule = funcArr[currIndex](curr[vIndex][0], curr[vIndex][1], curr[vIndex][2])
        result.push(singleRule)
      })

      if (currIndex == 1) {
        result.push(vDisableOtherKey)
      }

      return result
    },
    [dKey, sKey, vKey, vJ, vK],
  )
}

// 一般规则的生成方程
function generate_d_mo_single_rule(from_key_code, to_key_code, to_modifier_key_code_array) {
  let toArr = [],
    conditionsArr = []
  if (to_modifier_key_code_array) {
    toArr = [
      {
        key_code: to_key_code,
        modifiers: to_modifier_key_code_array,
      },
    ]
  } else {
    toArr = [{ key_code: to_key_code }]
  }

  if (from_key_code == 'm' || from_key_code == 'n') {
    conditionsArr = [
      {
        type: 'variable_if',
        name: 'd_mo',
        value: 1,
      },
    ]
  } else {
    conditionsArr = [
      {
        type: 'variable_if',
        name: 'd_mo',
        value: 1,
      },
      {
        type: 'variable_if',
        name: 'v_mo',
        value: 0,
      },
    ]
  }

  const result = {
    type: 'basic',
    from: {
      key_code: from_key_code,
      modifiers: {
        optional: ['any'],
      },
    },
    to: toArr,
    conditions: conditionsArr,
  }

  return result
}

function generate_v_mo_single_rule(from_key_code, to_key_code, to_modifier_key_code_array) {
  console.log('to_modifier_key_code_array:', to_modifier_key_code_array)
  const result = {
    type: 'basic',
    from: {
      key_code: from_key_code,
      modifiers: {
        optional: ['any'],
      },
    },
    to: [
      {
        key_code: to_key_code,
        modifiers: to_modifier_key_code_array,
      },
    ],
    to_after_key_up: [
      {
        key_code: 'vk_none',
      },
    ],
    conditions: [
      {
        type: 'variable_if',
        name: 'v_mo',
        value: 1,
      },
    ],
  }

  return result
}

function generate_disable_settings_single_rule(from_key_code, from_modifier_key_code_array) {
  let modifiersObj = {}
  if (from_modifier_key_code_array) {
    modifiersObj = {
      optional: ['caps_lock'],
      mandatory: from_modifier_key_code_array,
    }
  } else {
    modifiersObj = {
      optional: ['caps_lock'],
    }
  }
  const result = {
    type: 'basic',
    from: {
      key_code: from_key_code,
      modifiers: modifiersObj,
    },
    to: [
      {
        key_code: 'vk_none',
      },
    ],
  }

  return result
}

function generate_normal_characters_single_rule(character_code) {
  const result = {
    type: 'basic',
    from: {
      key_code: character_code,
      modifiers: {
        optional: ['any'],
      },
    },
    to: [
      {
        key_code: 'd',
      },
      {
        key_code: character_code,
      },
      {
        key_code: 'vk_none',
      },
    ],
    conditions: [
      {
        type: 'variable_if',
        name: 'd_mo',
        value: 1,
      },
    ],
  }

  return result
}

const wholeRules = {
  title: '2 d_mo',
  rules: [
    {
      description: '2 d_mo',
      manipulators: generate(),
    },
  ],
}

const jsonString = JSON.stringify(wholeRules)
document.write(jsonString)
