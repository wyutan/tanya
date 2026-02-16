---
pageLayout: home
externalLinkIcon: false
config:
  -
    type: Custom
    #type: hero
    full: true
    forceDark: true
    effect: hyper-speed
    effectConfig:
      distortion: turbulentDistortion
      length: 450
      roadWidth: 15
      islandWidth: 2
      lanesPerRoad: 4
      fov: 90
      fovSpeedUp: 150
      speedUp: 2
      carLightsFade: 0.4
      totalSideLightSticks: 20
      lightPairsPerRoadWay: 40
      shoulderLinesWidthPercentage: 0.05
      brokenLinesWidthPercentage: 0.1
      brokenLinesLengthPercentage: 0.5
      lightStickWidth: [0.12, 0.5]
      lightStickHeight: [1.3, 1.7]
      movingAwaySpeed: [60, 80]
      movingCloserSpeed: [-120, -160]
      carLightsLength: [12, 80]
      carLightsRadius: [0.05, 0.14]
      carWidthPercentage: [0.3, 0.5]
      carShiftX: [-0.8, 0.8]
      carFloorSeparation: [0, 5]
      colors:
        roadColor: 0x080808
        islandColor: 0x0a0a0a
        background: 0x000000
        shoulderLines: 0x131318
        brokenLines: 0x131318
        leftCars: [0xd856bf, 0x6750a2, 0xc247ac]
        rightCars: [0x03b3c3, 0x0e5ea5, 0x324555]
        sticks: 0x03b3c3
    hero:
      name: 在这
      tagline: 是星辰，是雨雾，是闪电，是不羁的灵魂
      text: 
      actions:
        -
          theme: brand
          text: 网络 →
          link: /network/
        -
          theme: brand
          text: linux →
          link: /os/linux/
        -
          theme: brand
          text: 存储 →
          link: /storage/
        -
          theme: brand
          text: docker →
          link: /容器/       
        -
          theme: brand
          text: 小卡拉米 →
          link: /about/
        #-
          #theme: alt
          #text: connection →
          #link: mailto:wyu.tan99@gmail.com
---
