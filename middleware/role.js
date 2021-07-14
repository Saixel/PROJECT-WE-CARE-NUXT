export default function(context) {
  // eslint-disable-next-line no-console
  console.log(context)

  if (context.$auth.$state.user.role !== 'professional') {
    context.redirect('/')
  }
}