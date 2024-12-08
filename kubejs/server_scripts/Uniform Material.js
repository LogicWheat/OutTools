ServerEvents.recipes(event => {
    //植物油
    event.remove({id:'createaddition:compacting/seed_oil'})
    //乙醇
    event.remove({id:'createaddition:mixing/bioethanol'})
})