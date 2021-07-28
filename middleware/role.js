export default function(context) {
  if (context.$auth.$state.user.role !== 'admin') {
    context.redirect('/')
  }
}