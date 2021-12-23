exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allDatoCmsHabitacion {
        nodes {
          slug
        }
      }
    }
  `)
  if(result.errors){
    reporter.panic("No hubo resultados", result.errors);
  }

  const rooms = result.data.allDatoCmsHabitacion.nodes;

  rooms.forEach(room => {
    actions.createPage({
      path:room.slug,
      component: require.resolve('./src/components/organisms/RoomsTemplate/RoomsTemplate.js'),
      context:{
        slug:room.slug
      }
    })
  });


}

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }
