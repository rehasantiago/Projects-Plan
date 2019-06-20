const initState = {
    projects:[
        {id:'1',title:'reha',content:'blah blah blah'},
        {id:'2',title:'nitin',content:'blah blah blah'},
        {id:'3',title:'sangeeta',content:'blah blah blah'}
    ]
}

const projectReducer = (state=initState,action) =>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project',action.project);
            return state;
        case 'CREATE_PROJECT_ERR':
            console.log('create project err',action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer