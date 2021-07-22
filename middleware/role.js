export default function(context) {
  if (context.$auth.$state.user.role !== 'professional') {
    context.redirect('/')
  }
}