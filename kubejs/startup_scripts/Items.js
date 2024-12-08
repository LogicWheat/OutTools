StartupEvents.registry('item',(event) => {
    event.create('logic:silicon','basic')
    event.create('logic:silicon_plate','basic')
    event.create('logic:lithographic_silicon_plate','basic')
    event.create('logic:incomplete_basic_control_circuit','create:sequenced_assembly')
    event.create('logic:incomplete_advanced_control_circuit','create:sequenced_assembly')
    event.create('logic:incomplete_elite_control_circuit','create:sequenced_assembly')
    event.create('logic:incomplete_ultimate_control_circuit','create:sequenced_assembly')
})