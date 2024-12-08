//ClockWork Additions 物品配方 作者：小麦LogicWheat
//配方版本：1.1
//需要Mods：KubeJS 6; KubeJS Create
ServerEvents.recipes(event => {
    const { create } = event.recipes
    event.shaped('clockworkadditions:handlebar',[
        'SAS',
        ' S ',
        '   '
    ],{
        S:'create:shaft',
        A:'create:andesite_casing'
    })
    event.shaped('clockworkadditions:mechanical_pedals',[
        'ASA',
        ' R ',
        'PSP'
    ],{
        A:'create:andesite_casing',
        S:'create:shaft',
        R:'create:red_seat',
        P:'#forge:plates/copper'
    })
    event.shaped('clockworkadditions:kinetic_flap_bearing',[
        ' B ',
        ' C ',
        ' S '
    ],{
        B:'#forge:plates/brass',
        C:'create:brass_casing',
        S:'create:shaft'
    })
    create.compacting('8x clockworkadditions:copycat_wing',['#forge:plates/zinc','8x vs_clockwork:flap'])
    create.compacting('8x clockworkadditions:copycat_flap',['#forge:plates/zinc','8x vs_clockwork:wing'])
    event.shapeless('clockworkadditions:copycat_flap','clockworkadditions:copycat_wing')
    event.shapeless('clockworkadditions:copycat_wing','clockworkadditions:copycat_flap')
})