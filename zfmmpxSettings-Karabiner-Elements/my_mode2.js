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
  ['spacebar', 'return_or_enter'],
]

const v_mo_data = [
  ['h', 'left_arrow', ['left_shift']],
  ['j', 'down_arrow', ['left_shift']],
  ['k', 'up_arrow', ['left_shift']],
  ['l', 'right_arrow', ['left_shift']],
  ['left_command', 'left_command'],
  ['right_command', 'left_command'],
]

const normal_characters_data_d = [
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
  'v',
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

const kKey = {
  type: 'basic',
  from: {
    key_code: 'k',
    modifiers: {
      optional: ['any'],
    },
  },
  to: [
    {
      key_code: 'left_command',
    },
  ],
  to_if_alone: [
    {
      key_code: 'k',
    },
  ],
  conditions: [
    {
      type: 'variable_if',
      name: 'd_mo',
      value: 0,
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
      key_code: 'v',
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
  conditions: [
    {
      type: 'variable_if',
      name: 'v_mo',
      value: 1,
    },
  ],
}

const vCommandH = {
  type: 'basic',
  from: {
    key_code: 'h',
    modifiers: {
      mandatory: ['command', 'option'],
    },
  },
  to: [
    {
      key_code: 'left_arrow',
      modifiers: ['left_shift', 'left_option'],
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

const vCommandJ = {
  type: 'basic',
  from: {
    key_code: 'j',
    modifiers: {
      mandatory: ['command', 'option'],
    },
  },
  to: [
    {
      key_code: 'down_arrow',
      modifiers: ['left_shift'],
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

const vCommandK = {
  type: 'basic',
  from: {
    key_code: 'k',
    modifiers: {
      mandatory: ['command', 'option'],
    },
  },
  to: [
    {
      key_code: 'up_arrow',
      modifiers: ['left_shift'],
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

const vCommandL = {
  type: 'basic',
  from: {
    key_code: 'l',
    modifiers: {
      mandatory: ['command', 'option'],
    },
  },
  to: [
    {
      key_code: 'right_arrow',
      modifiers: ['left_shift', 'left_option'],
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

const d_vDisableOtherKey = {
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
      name: 'd_mo',
      value: 1,
    },
    {
      type: 'variable_if',
      name: 'v_mo',
      value: 1,
    },
  ],
}

// 所有 一般规则的键 的集合
const whole_data = [d_mo_data, v_mo_data, normal_characters_data_d]

// 所有 一般规则的生成方程 的集合
const funcArr = [
  generate_d_mo_single_rule,
  generate_v_mo_single_rule,
  generate_normal_characters_single_rule('d', 'd_mo'),
]

// 总的生成方程(包括一般规则和特殊规则), 需要区分顺序,顺序是: dKey => sKey => vKey => vJ => vK => d_mo_data的所有规则 =>
// v_mo_data的所有规则 => d_vDisableOtherKey => 所有的normal_characters_data_d
function generate() {
  // new
  return whole_data.reduce(
    (result, curr, currIndex) => {
      curr.map((v, vIndex) => {
        const singleRule = funcArr[currIndex](curr[vIndex][0], curr[vIndex][1], curr[vIndex][2])
        result.push(singleRule)
      })

      if (currIndex == 1) {
        result.push(d_vDisableOtherKey)
      }

      return result
    },
    [dKey, kKey, sKey, vKey, vJ, vK, vCommandH, vCommandJ, vCommandK, vCommandL],
  )
}

// 一般规则的生成方程
function generate_d_mo_single_rule(from_key_code, to_key_code, to_modifier_key_code_array) {
  let toArr = []
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

  const result = {
    type: 'basic',
    from: {
      key_code: from_key_code,
      modifiers: {
        optional: ['any'],
      },
    },
    to: toArr,
    conditions: [
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
    ],
  }

  return result
}

function generate_v_mo_single_rule(from_key_code, to_key_code, to_modifier_key_code_array) {
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
    conditions: [
      {
        type: 'variable_if',
        name: 'd_mo',
        value: 1,
      },
      {
        type: 'variable_if',
        name: 'v_mo',
        value: 1,
      },
    ],
  }

  return result
}

function generate_normal_characters_single_rule(first_key, mode_name) {
  return (character_code) => ({
    type: 'basic',
    from: {
      key_code: character_code,
      modifiers: {
        optional: ['any'],
      },
    },
    to: [
      {
        key_code: first_key,
      },
      {
        key_code: character_code,
      },
      {
        key_code: 'vk_none', // 这里不可去掉，如果去掉的话当按住d再按住i会打出「diiiii....」 不去掉的话会正常打出「di」
      },
    ],
    conditions: [
      {
        type: 'variable_if',
        name: mode_name,
        value: 1,
      },
    ],
  })
}

// escape
function generate2() {
  return [
    {
      type: 'basic',
      from: {
        key_code: 'caps_lock',
        modifiers: {
          optional: ['any'],
        },
      },
      to: [
        {
          key_code: 'left_control',
          modifiers: ['left_shift'],
        },
      ],
      to_if_alone: [
        {
          key_code: 'escape',
        },
      ],
    },
  ]
}

// escape
function generate3() {
  const rules = [
    ['escape', 'mission_control'],
    ['f1', 'launchpad'],
  ]

  return rules.map((v) => ({
    type: 'basic',
    from: {
      key_code: v[0],
      modifiers: {
        optional: ['any'],
      },
    },
    to: [
      {
        key_code: v[1],
      },
    ],
  }))
}

const wholeRules = {
  title: '1 my mode',
  rules: [
    {
      description: '1 d_mo',
      manipulators: generate(),
    },
    {
      description: '2 escape修改',
      manipulators: generate2(),
    },
    {
      description: '3 功能键(f键)修改',
      manipulators: generate3(),
    },
  ],
}

const jsonString = JSON.stringify(wholeRules)
document.write(jsonString)
