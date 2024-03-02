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
  // ['return_or_enter', 'return_or_enter', ['left_command']],
  // ['spacebar', 'return_or_enter'],
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
  'return_or_enter',
  'spacebar',
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

// 1. d_mo
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
    [dKey, sKey, vKey, vJ, vK, vCommandH, vCommandJ, vCommandK, vCommandL],
  )
}

// 特殊规则
const mouseKeysFullOff = {
  type: 'basic',
  from: {
    key_code: 'f1',
    modifiers: {
      optional: ['any'],
    },
  },
  to: [
    {
      set_variable: {
        name: 'mouse_keys_full',
        value: 1,
      },
    },
  ],
  // to_if_alone: [
  //   {
  //     key_code: 'e',
  //   },
  // ],
  // to_after_key_up: [
  //   {
  //     set_variable: {
  //       name: 'mouse_keys_full',
  //       value: 0,
  //     },
  //   },
  // ],
}
const mouseKeysFullOn = {
  type: 'basic',
  from: {
    key_code: 'f2',
    modifiers: {
      optional: ['any'],
    },
  },
  to: [
    {
      set_variable: {
        name: 'mouse_keys_full',
        value: 0,
      },
    },
  ],
  // conditions: [
  //   {
  //     type: 'variable_if',
  //     name: 'mouse_keys_full',
  //     value: 0,
  //   },
  // ],
}
const mouseKeysFullSlow = {
  type: 'basic',
  from: {
    key_code: 'f',
    modifiers: {
      optional: ['any'],
    },
  },
  to: [
    {
      mouse_key: {
        speed_multiplier: 0.1,
      },
    },
  ],
  conditions: [
    {
      type: 'variable_if',
      name: 'mouse_keys_full',
      value: 1,
    },
  ],
}
const mouseKeysFullFast = {
  type: 'basic',
  from: {
    key_code: 'e',
    modifiers: {
      optional: ['any'],
    },
  },
  to: [
    {
      mouse_key: {
        speed_multiplier: 2,
      },
    },
  ],
  conditions: [
    {
      type: 'variable_if',
      name: 'mouse_keys_full',
      value: 1,
    },
  ],
}
const mouseKeysFullScroll = {
  type: 'basic',
  from: {
    key_code: 's',
    modifiers: {
      optional: ['any'],
    },
  },
  to: [
    {
      set_variable: {
        name: 'mouse_keys_full_scroll',
        value: 1,
      },
    },
  ],
  to_if_alone: [
    {
      key_code: 's',
    },
  ],
  to_after_key_up: [
    {
      set_variable: {
        name: 'mouse_keys_full_scroll',
        value: 0,
      },
    },
  ],
  // conditions: [
  //   {
  //     type: 'variable_if',
  //     name: 'mouse_keys_full',
  //     value: 1,
  //   },
  // ],
}

const mouse_keys_mo_move_data = [
  ['h', { mouse_key: { x: -4000 } }],
  ['j', { mouse_key: { y: 4000 } }],
  ['k', { mouse_key: { y: -4000 } }],
  ['l', { mouse_key: { x: 4000 } }],

  // ['u', { mouse_key: { x: -4000, y: -4000 } }],
  // ['m', { mouse_key: { x: -4000, y: 4000 } }],
  // ['period', { mouse_key: { x: 4000, y: 4000 } }],
  // ['o', { mouse_key: { x: 4000, y: -4000 } }],
  ['semicolon', { pointing_button: 'button1' }],
  ['quote', { pointing_button: 'button2' }],
]
const mouse_keys_mo_scroll_data = [
  ['h', { mouse_key: { horizontal_wheel: 26 } }],
  ['j', { mouse_key: { vertical_wheel: 26 } }],
  ['k', { mouse_key: { vertical_wheel: -26 } }],
  ['l', { mouse_key: { horizontal_wheel: -26 } }],
]

// 所有 mouse_keys_mo的键 的集合
const whole_mouse_keys_mo_data = [mouse_keys_mo_move_data]
function generate4() {
  return whole_mouse_keys_mo_data.reduce(
    (result, curr, currIndex) => {
      if (currIndex === 0) {
        result = result.concat(
          curr.map((v, vIndex) => {
            const [key_code, toItem] = v
            return {
              type: 'basic',
              from: {
                key_code,
                modifiers: {
                  optional: ['any'],
                },
              },
              to: [toItem],
              conditions: [
                {
                  type: 'variable_if',
                  name: 'mouse_keys_full',
                  value: 1,
                },
                // {
                //   type: 'variable_if',
                //   name: 'mouse_keys_full_scroll',
                //   value: 0,
                // },
              ],
            }
          }),
        )
      } else if (currIndex === 1) {
        result = result.concat(
          curr.map((v, vIndex) => {
            const [key_code, toItem] = v
            return {
              type: 'basic',
              from: {
                key_code,
                modifiers: {
                  optional: ['any'],
                },
              },
              to: [toItem],
              conditions: [
                {
                  type: 'variable_if',
                  name: 'mouse_keys_full',
                  value: 0,
                },
                {
                  type: 'variable_if',
                  name: 'mouse_keys_full_scroll',
                  value: 1,
                },
              ],
            }
          }),
        )
      }

      return result
    },
    [mouseKeysFullOff, mouseKeysFullOn, mouseKeysFullSlow, mouseKeysFullFast],
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

// 2. caps_lock改成escape
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

// 3 其他单个键修改k
function generate3() {
  const rules = [
    // ['fn', 'left_control'],
    // ['left_control', 'fn'],
    // ['non_us_backslash', 'grave_accent_and_tilde'],
    // ['grave_accent_and_tilde', 'non_us_backslash'],
    // ['escape', 'fn'],
    ['escape', 'spacebar', ['left_control']],
    // ['fn', 'escape'],
    // ['f1', 'i', ['left_command', 'left_option']],
    // ['f2', 'c', ['left_command', 'left_shift']],

    // ['f7', 'rewind'],
    // ['f8', 'play_or_pause'],
    // ['f9', 'fast_forward'],
    // ['f10', 'mute'],
    // ['f11', 'volume_decrement'],
    // ['f12', 'volume_increment'],

    // ['rewind', 'f7'],
    // ['play_or_pause', 'f8'],
    // ['fast_forward', 'f9'],
    // ['mute', 'f10'],
    // ['volume_decrement', 'f11'],
    // ['volume_increment', 'f12'],
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
        modifiers: v[2],
      },
    ],
  }))
}

const wholeRules = {
  title: '1 my mode',
  rules: [
    {
      description: '1. d_mo new',
      manipulators: generate(),
    },
    {
      description: '2. caps_lock改成escape new',
      manipulators: generate2(),
    },
    {
      description: '3. 其他单个键修改 new',
      manipulators: generate3(),
    },
    {
      description: '4. mouse_key new',
      manipulators: generate4(),
    },
  ],
}

const jsonString = JSON.stringify(wholeRules)
document.write(jsonString)
