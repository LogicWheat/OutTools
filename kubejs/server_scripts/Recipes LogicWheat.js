ServerEvents.recipes( event => {
    const { create } = event.recipes
    const $MysteriousItemConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
    const $ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe')

    //Minecraft
    event.remove({id:'createaddition:filling/cake'})

    //LogicWheat
    event.smelting('logic:silicon','#forge:dusts/quartz')
    create.pressing('logic:silicon_plate','logic:silicon')
    event.custom({
        "type": "create_optical:focusing",
        "ingredients": [
          {
            "item": "logic:silicon_plate"
          }
        ],
        "processingTime": 50,
        "required_beam_type": 2,
        "results": [
          {
            "item": "logic:lithographic_silicon_plate"
          }
        ]
      })

    //机械动力 Create
    $MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create('create:chromatic_compound','create:refined_radiance'))
    $MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create('create:chromatic_compound','create:shadow_steel'))
    create.item_application('create:refined_radiance_casing',['minecraft:glass','create:refined_radiance'])
    create.item_application('create:shadow_steel_casing',['minecraft:obsidian','create:shadow_steel'])
    event.remove({id:'create:compacting/chocolate'})

    //通用机械 Mekanism
    //同步1.21版本mek部分物品配方
    event.replaceInput({output:'mekanism:teleportation_core'},'minecraft:lapis_lazuli','minecraft:ender_pearl')
    //更改控制电路配方
    create.sequenced_assembly([
        'mekanism:basic_control_circuit'
    ],'logic:lithographic_silicon_plate',[
        create.deploying('logic:incomplete_basic_control_circuit',['logic:incomplete_basic_control_circuit','#forge:ingots/osmium']),
        create.deploying('logic:incomplete_basic_control_circuit',['logic:incomplete_basic_control_circuit','minecraft:redstone']),
        create.deploying('logic:incomplete_basic_control_circuit',['logic:incomplete_basic_control_circuit','minecraft:redstone'])
    ]).transitionalItem('logic:incomplete_basic_control_circuit').loops(2)

    create.sequenced_assembly([
        'mekanism:advanced_control_circuit'
    ],'logic:lithographic_silicon_plate',[
        create.deploying('logic:incomplete_advanced_control_circuit',['logic:incomplete_advanced_control_circuit','mekanism:alloy_reinforced']),
        create.deploying('logic:incomplete_advanced_control_circuit',['logic:incomplete_advanced_control_circuit','create:electron_tube']),
        create.deploying('logic:incomplete_advanced_control_circuit',['logic:incomplete_advanced_control_circuit','createaddition:capacitor'])
    ]).transitionalItem('logic:incomplete_advanced_control_circuit').loops(2)

    create.sequenced_assembly([
        'mekanism:elite_control_circuit'
    ],'logic:lithographic_silicon_plate',[
        create.deploying('logic:incomplete_elite_control_circuit',['logic:incomplete_elite_control_circuit','mekanism:alloy_reinforced']),
        create.deploying('logic:incomplete_elite_control_circuit',['logic:incomplete_elite_control_circuit','create:electron_tube']),
        create.deploying('logic:incomplete_elite_control_circuit',['logic:incomplete_elite_control_circuit','createaddition:capacitor']),
        create.deploying('logic:incomplete_elite_control_circuit',['logic:incomplete_elite_control_circuit','#forge:wires/gold'])
    ]).transitionalItem('logic:incomplete_elite_control_circuit').loops(3)

    create.sequenced_assembly([
        'mekanism:ultimate_control_circuit'
    ],'logic:lithographic_silicon_plate',[
        create.deploying('logic:incomplete_ultimate_control_circuit',['logic:incomplete_ultimate_control_circuit','mekanism:alloy_atomic']),
        create.deploying('logic:incomplete_ultimate_control_circuit',['logic:incomplete_ultimate_control_circuit','create:electron_tube']),
        create.deploying('logic:incomplete_ultimate_control_circuit',['logic:incomplete_ultimate_control_circuit','createaddition:capacitor']),
        create.deploying('logic:incomplete_ultimate_control_circuit',['logic:incomplete_ultimate_control_circuit','create_connected:control_chip']),
        create.deploying('logic:incomplete_ultimate_control_circuit',['logic:incomplete_ultimate_control_circuit','#forge:wires/gold'])
    ]).transitionalItem('logic:incomplete_ultimate_control_circuit').loops(3)

    event.remove({output:'mekanism:basic_control_circuit'})
    event.remove({output:'mekanism:advanced_control_circuit'})
    event.remove({output:'mekanism:elite_control_circuit'})
    event.remove({output:'mekanism:ultimate_control_circuit'})
    //更改流体储罐配方
    create.mechanical_crafting('mekanism:basic_fluid_tank',[
        'TMT',
        'M M',
        'TMT'
    ],{
        T:'create:fluid_tank',
        M:'minecraft:iron_ingot'
    })

    create.mechanical_crafting('mekanism:advanced_fluid_tank',[
        'TMT',
        'MFM',
        'TMT'
    ],{
        T:'create:fluid_tank',
        M:'mekanism:alloy_infused',
        F:'mekanism:basic_fluid_tank'
    })

    create.mechanical_crafting('mekanism:elite_fluid_tank',[
        'TTMTT',
        ' MFM ',
        'TTMTT'
    ],{
        T:'create:fluid_tank',
        M:'mekanism:alloy_reinforced',
        F:'mekanism:advanced_fluid_tank'
    })

    create.mechanical_crafting('mekanism:ultimate_fluid_tank',[
        ' TTT ',
        'TTMTT',
        'TMFMT',
        'TTMTT',
        ' TTT '
    ],{
        T:'create:fluid_tank',
        M:'mekanism:alloy_atomic',
        F:'mekanism:elite_fluid_tank'
    })

    event.remove({output:'mekanism:basic_fluid_tank'})
    event.remove({output:'mekanism:advanced_fluid_tank'})
    event.remove({output:'mekanism:elite_fluid_tank'})
    event.remove({output:'mekanism:ultimate_fluid_tank'})
    //更改化学品储罐配方
    create.mechanical_crafting('mekanism:basic_chemical_tank',[
        'TMT',
        'M M',
        'TMT'
    ],{
        T:'railways:fuel_tank',
        M:'mekanism:ingot_osmium'
    })

    create.mechanical_crafting('mekanism:advanced_chemical_tank',[
        'TMT',
        'MFM',
        'TMT'
    ],{
        T:'railways:fuel_tank',
        M:'mekanism:alloy_infused',
        F:'mekanism:basic_chemical_tank'
    })

    create.mechanical_crafting('mekanism:elite_chemical_tank',[
        'TTMTT',
        ' MFM ',
        'TTMTT'
    ],{
        T:'railways:fuel_tank',
        M:'mekanism:alloy_reinforced',
        F:'mekanism:advanced_chemical_tank'
    })

    create.mechanical_crafting('mekanism:ultimate_chemical_tank',[
        ' TTT ',
        'TTMTT',
        'TMFMT',
        'TTMTT',
        ' TTT '
    ],{
        T:'railways:fuel_tank',
        M:'mekanism:alloy_atomic',
        F:'mekanism:elite_chemical_tank'
    })

    event.remove({output:'mekanism:basic_chemical_tank'})
    event.remove({output:'mekanism:advanced_chemical_tank'})
    event.remove({output:'mekanism:elite_chemical_tank'})
    event.remove({output:'mekanism:ultimate_chemical_tank'})
    //更改线缆、管道配方
    event.shaped('8x mekanism:basic_universal_cable',[
        'PPP',
        'SXS',
        'PPP'
    ],{
        P:'createaddition:gold_spool',
        S:'#forge:ingots/steel',
        X:'minecraft:redstone'
    })

    event.shaped('8x mekanism:basic_mechanical_pipe',[
        'PPP',
        'SXS',
        'PPP'
    ],{
        P:'create:fluid_pipe',
        S:'#forge:ingots/steel',
        X:'minecraft:bucket'
    })

    event.shaped('8x mekanism:basic_pressurized_tube',[
        'PPP',
        'SXS',
        'PPP'
    ],{
        P:'create:fluid_pipe',
        S:'#forge:ingots/steel',
        X:'#forge:glass/silica'
    })

    event.shaped('8x mekanism:basic_logistical_transporter',[
        'PPP',
        'SXS',
        'PPP'
    ],{
        P:'create:belt_connector',
        S:'#forge:ingots/steel',
        X:'mekanism:basic_control_circuit'
    })

    event.shaped('2x mekanism:restrictive_transporter',[
        ' P ',
        'SXS',
        ' P '
    ],{
        P:'create:fluid_pipe',
        S:'#forge:ingots/steel',
        X:'minecraft:iron_bars'
    })

    event.shaped('2x mekanism:diversion_transporter',[
        'RPR',
        'SXS',
        'RPR'
    ],{
        P:'create:fluid_pipe',
        S:'#forge:ingots/steel',
        X:'minecraft:iron_bars',
        R:'minecraft:redstone'
    })
    event.remove({output:'mekanism:basic_universal_cable'})
    event.remove({output:'mekanism:basic_mechanical_pipe'})
    event.remove({output:'mekanism:basic_pressurized_tube'})
    event.remove({output:'mekanism:basic_logistical_transporter'})
    event.remove({output:'mekanism:restrictive_transporter'})
    event.remove({output:'mekanism:diversion_transporter'})
    //删除传送机
    event.remove({output:'mekanism:teleporter'})
    event.remove({output:'mekanism:portable_teleporter'})
    event.remove({output:'mekanism:teleporter_frame'})
    //增加石英粉生产配方
    create.crushing(Item.of('mekanism:dust_quartz').withChance(0.5),'minecraft:quartz_block')

    //Ad Astra!
    //删除与mek重复物品
    event.remove({output:'ad_astra:steel_cable'})
    event.remove({output:'ad_astra:desh_cable'})
    event.remove({output:'ad_astra:desh_fluid_pipe'})
    event.remove({output:'ad_astra:ostrum_fluid_pipe'})
    event.remove({output:'ad_astra:cable_duct'})
    event.remove({output:'ad_astra:fluid_pipe_duct'})
    event.remove({output:'ad_astra:coal_generator'})
    event.remove({output:'ad_astra:compressor'})
    event.remove({output:'ad_astra:etrionic_blast_furnace'})
    event.remove({output:'ad_astra:fuel_refinery'})
    event.remove({output:'ad_astra:oxygen_loader'})
    event.remove({output:'ad_astra:solar_panel'})
    event.remove({output:'ad_astra:water_pump'})
    event.remove({output:'ad_astra:energizer'})
    event.remove({output:'ad_astra:cryo_freezer'})
    event.remove({output:'ad_astra:etrionic_capacitor'})
    event.remove({output:'ad_astra:photovoltaic_etrium_cell'})
    event.remove({output:'ad_astra:wrench'})
    //更改漫游车配方
    event.remove({output:'ad_astra:tier_1_rover'})
    event.remove({output:'ad_astra:wheel'})
    create.mechanical_crafting('ad_astra:tier_1_rover',[
        'WTCHW',
        'SEDAO',
        'WTCRW'
    ],{
        W:'trackwork:simple_wheel',
        T:'create:fluid_tank',
        C:'#interiors:chairs',
        H:'clockworkadditions:handlebar',
        S:'#forge:chests/wooden',
        E:'createdieselgenerators:diesel_engine',
        D:'ad_astra:desh_block',
        A:'mekanism:advanced_control_circuit',
        O:'ad_astra:radio',
        R:'create_things_and_misc:radar'
    })

    //CC: Tweaked
    event.replaceInput({output:'computercraft:computer_normal'},'minecraft:redstone','mekanism:advanced_control_circuit')
    event.replaceInput({output:'computercraft:computer_normal'},'#forge:stone','create:andesite_alloy')
    event.replaceInput({output:'computercraft:computer_advanced'},'minecraft:redstone','mekanism:ultimate_control_circuit')
    event.replaceInput({output:'computercraft:computer_advanced'},'minecraft:gold_ingot','create:brass_ingot')
    event.remove({id:'computercraft:computer_advanced_upgrade'})
    event.shaped('computercraft:computer_advanced',[
        'BBB',
        'BCB',
        'BUB'
    ],{
        B:'create:brass_ingot',
        C:'computercraft:computer_normal',
        U:'mekanism:ultimate_control_circuit'
    })
    event.remove({output:'computercraft:pocket_computer_normal'})
    event.remove({output:'computercraft:pocket_computer_advanced'})
    create.pressing('computercraft:pocket_computer_normal','computercraft:computer_normal')
    create.pressing('computercraft:pocket_computer_advanced','computercraft:computer_advanced')
    event.replaceInput({output:'computercraft:monitor_normal'},'#forge:stone','create:andesite_alloy')
    event.replaceInput({output:'computercraft:monitor_advanced'},'minecraft:gold_ingot','create:brass_ingot')
    event.replaceInput({output:'computercraft:speaker'},'#forge:stone','create:andesite_alloy')
    event.replaceInput({output:'computercraft:printer'},'#forge:stone','create:andesite_alloy')
    event.replaceInput({output:'computercraft:disk_drive'},'#forge:stone','create:andesite_alloy')
    event.replaceInput({output:'computercraft:cable'},'#forge:stone','#minecraft:wool')
    event.replaceInput({output:'computercraft:wired_modem'},'#forge:stone','create:andesite_casing')
    event.replaceInput({output:'computercraft:wireless_modem_normal'},'#forge:stone','create:andesite_casing')
    event.replaceInput({output:'computercraft:wireless_modem_advanced'},'minecraft:gold_ingot','create:brass_casing')

    //通量网络 Flux Networks
    create.mixing('2x fluxnetworks:flux_dust',['minecraft:redstone','#forge:dusts/obsidian']).heated()

    //微型红石 Tiny Redstone
    event.remove({output:'tinyredstone:silicon_compound'})
    event.remove({output:'tinyredstone:silicon'})
    event.replaceInput({input:'tinyredstone:silicon'},'tinyredstone:silicon','logic:silicon')

    //Create Crafts & Additions
    event.remove({id:'createaddition:filling/honey_cake'})
    event.remove({output:'createaddition:cake_base'})
    event.remove({output:'createaddition:cake_base_baked'})
    event.replaceInput({input:'createaddition:cake_base_baked'},'createaddition:cake_base_baked','ratatouille:cake_base')

    //机械动力：实用物品 Create Utilities
    event.shaped('createutilities:void_chest',[
        ' G ',
        'CQC',
        ' V '
    ],{
        G:'createutilities:graviton_tube',
        C:'#forge:chests/wooden',
        V:'createutilities:void_casing',
        Q:'mekanism:quantum_entangloporter'
    })
    event.remove({output:'createutilities:void_motor'})
    event.remove({output:'createutilities:void_chest'})
    event.remove({output:'createutilities:void_tank'})
    event.remove({output:'createutilities:void_battery'})
    event.remove({output:'createutilities:gearcube'})
    event.remove({output:'createutilities:lshaped_gearbox'})

    //机械动力：齿轮与麦穗 Ratatouille
    event.remove({output:'ratatouille:salt'})
    event.replaceInput({input:'ratatouille:salt'},'ratatouille:salt','#forge:salt')

    //瓦尔基里天空：竞赛 VS:Tournament
    event.remove({output:'vs_tournament:thruster'})
    event.remove({output:'vs_tournament:tiny_thruster'})
    event.remove({output:'vs_tournament:spinner'})
    event.remove({output:'vs_tournament:prop_big'})
    event.remove({output:'vs_tournament:prop_small'})
    event.remove({output:'vs_tournament:chunk_loader'})
    event.remove({output:'vs_tournament:upgrade_thruster'})
    event.remove({output:'vs_tournament:pulse_gun'})

    //虚空动力 VoidPower
    event.remove({output:'void_power:engine_controller'})
    event.remove({output:'void_power:glass_screen'})
    event.remove({output:'void_power:hologram'})
    event.shaped('4x void_power:engine_controller',[
        'CPC',
        'PAP',
        'CPC'
    ],{
        C:'create:andesite_casing',
        P:'create:precision_mechanism',
        A:'mekanism:pellet_antimatter'
    })
    event.shaped('void_power:vr_glasses',[
        '   ',
        'SGS',
        '   '
    ],{
        S:'void_power:glass_screen',
        G:'create:goggles'
    })
    event.shaped('void_power:glass_screen',[
        ' G ',
        'GMG',
        ' G '
    ],{
        G:'#forge:glass',
        M:'computercraft:monitor_advanced'
    })
    create.mechanical_crafting('2x void_power:hologram',[
        ' SSS ',
        'QGPGQ',
        'QECEQ',
        'QABAQ',
        ' OOO '
    ],{
        S:'void_power:glass_screen',
        Q:'minecraft:quartz_block',
        G:'createutilities:graviton_tube',
        P:'minecraft:beacon',
        E:'create:electron_tube',
        C:'#forge:circuits/ultimate',
        A:'mekanism:alloy_atomic',
        B:'#forge:ingots/brass',
        O:'minecraft:obsidian'
    })
})