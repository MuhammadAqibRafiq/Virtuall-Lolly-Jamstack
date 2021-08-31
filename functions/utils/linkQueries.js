const GET_LINKS = `
# Write your query or mutation here
query{
    allLolly{
    data {
        colorT
        colorM
        colorB
        to
        mess
        from
        _id
      
    }
  }
}`;

const CREATE_LINK = `
    mutation($colorT: String! ,$colorM: String! ,$colorB: String! ,$to: String! ,$mess: String!,$from: String!  ) {
        createVirtualLolly(data:{colorT: $colorT , colorM:$colorM , colorB:$colorB , to:$to , mess:$mess , from:$from  }) {
            colorT
            colorM
            colorB
            to
            mess
            from
            _id
           
        }
    }
`;

const DELETE_LINK = `
  mutation($id: ID!) {
        deleteVirtualLolly( id: $id) {
            _id
        }
    }
`;

module.exports = {
    GET_LINKS,
    CREATE_LINK,
    DELETE_LINK,
};