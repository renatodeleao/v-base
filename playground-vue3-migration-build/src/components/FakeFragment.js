// export default {
//   compatConfig: {
//     MODE: 3
//   },
//   name: 'FakeFragment',
//   inheritAttrs: false,
//   props: {
//     fakeFragmentSlotProps: {
//       type: Object
//     }
//   },
//   setup(props, { slots }) {
//     return () => slots.default(props.fragmentSlotProps)
//   }
// }


function FakeFragment(props, { slots }) {
  return slots.default(props.fragmentSlotProps)
}

FakeFragment.compatConfig = {
  MODE: 3
}
FakeFragment.inheritAttrs = false
FakeFragment.props = {
  fakeFragmentSlotProps: {
    type: Object
  }
}

export default FakeFragment


