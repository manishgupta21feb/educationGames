import commonData from "../../app/data/data.en";
import heart from "../assets/videos/heart.mp4";
import veins from "../assets/videos/veins.mp4";
import artery from "../assets/videos/artery.mp4";
import lungs from "../assets/videos/lungs.mp4";
import bone from "../assets/videos/bone.mp4";
import bicep from "../assets/videos/bicep.mp4";
import nerves from "../assets/videos/nerves.mp4";

const data = {
  buttonLabels: {
    ...commonData.buttonLabels,
    exit: "Exit",
    backButton: "Return to hospital lobby",
    visitedLabel: "visited",
  },

  hospital: "HOSPITAL",

  hospitalAltText: "The outside of a hospital building with 11 floors, each labeled with different medical departments",

  startUpInfoText: `Congratulations on starting medical school! As you work on your studies, 
  you will need to decide on a medical specialty. Visit each floor of the hospital and carefully review 
  the key structures and functions of each human body system before making your final decision.`,

  infoText: `Click on a floor button to navigate that medical specialty. 
  Explore the key structures and functions of each medical specialty’s body system by clicking the hotspots. 
  Use the "Return to hospital lobby" button to exit each floor.`,

  completionPopupText: `What medical field have you decided to pursue?`,
  completionPopup: commonData.completionPopup,

  resetPopupText: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,

  activityheading: `Students take on the role of doctors preparing to select their medical specialty and 
  explore the main functions and key structures of eleven human body systems including the circulatory, 
  respiratory, skeletal, muscular, digestive, urinary, reproductive, integumentary, nervous, immune, and endocrine systems.`,

  globalDeptText: `Click on the hot spots to explore the key structures and functions of this system.`,
  hospitalData: {
    cardiology: {
      id: "cardiology",
      name: "Cardiology",
      title: "Floor 1: Cardiology",
      text: `As a cardiologist, you must become an expert in the functions of the <b>circulatory system</b>.`,
      textLabel: `As a cardiologist, you must become an expert in the functions of the circulatory system.`,
      alt: `An outline of a human body with the main parts of the circulatory system highlighted, 
      veins are shown in blue, arteries in red. The heart is labeled.`,
      hotspots: [
        {
          id: "heart",
          name: "Heart",
          visualType: "video",
          videoSrc: heart,
          text: `<b>Heart:</b> One of the most important functions of the circulatory system is to transport blood around the body. 
          As the heart beats, it pushes oxygen-rich blood cells through the arteries to the organs.`,
          textLabel: `Heart: One of the most important functions of the circulatory system is to transport blood around the body. 
          As the heart beats, it pushes oxygen-rich blood cells through the arteries to the organs.`,
          alt: `View of the human chest, the heart, veins, and arteries are seen. The heart muscle is shown pumping.`,
        },
        {
          id: "vein",
          name: "Vein",
          visualType: "video",
          videoSrc: veins,
          text: `<b>Vein:</b> Carbon dioxide (CO<sub>2</sub>) and other waste from the cells are 
          collected by the passing red blood cells. The red blood cells flow back to the heart and lungs, 
          where CO<sub>2</sub> is transferred to the lungs and is exhaled.`,
          textLabel: `Vein: Carbon dioxide (C O2) and other waste from the cells are 
          collected by the passing red blood cells. The red blood cells flow back to the heart and lungs, 
          where C O2 is transferred to the lungs and is exhaled.`,
          alt: `A line of red blood cells travels through a vein in the bloodstream. 
          Carbon dioxide molecules move from the nearby tissue to the red blood cells.`,
        },
        {
          id: "artery",
          name: "Artery",
          visualType: "video",
          videoSrc: artery,
          text: `<b>Artery:</b> Oxygen (O<sub>2</sub>) is collected in red blood cells, then travels through the arteries to the organs, 
          where the oxygen and nutrients are supplied to the cells.`,
          textLabel: `Artery: Oxygen (O2) is collected in red blood cells, then travels through the arteries to the organs, 
          where the oxygen and nutrients are supplied to the cells.`,
          alt: `A line of red blood cells travels through an artery in the human bloodstream. 
          Oxygen molecules move from the nearby tissue to the red blood cells.`,
        },
      ],
    },
    pulmonology: {
      id: "pulmonology",
      name: "Pulmonology",
      title: "Floor 2: Pulmonology",
      text: `As a pulmonologist, you must become an expert in the functions of the <b>respiratory system</b>.`,
      textLabel: `As a pulmonologist, you must become an expert in the functions of the respiratory system.`,
      alt: `An outline of the human body showing the respiratory system; nose and mouth, trachea, and lungs are labeled.`,
      hotspots: [
        {
          id: "noseAndMouth",
          name: "Nose and mouth",
          visualType: "",
          text: `<b>Nose and mouth:</b> Oxygen (O<sub>2</sub>) enters the body through the mouth or nose when a person breathes in, or inhales. Waste carbon dioxide 
          (CO<sub>2</sub>) is excreted from the body when a person breathes out, or exhales.`,
          textLabel: `Nose and mouth: Oxygen (O2) enters the body through the mouth or nose when a person breathes in, or inhales. Waste carbon dioxide 
          (C O2) is excreted from the body when a person breathes out, or exhales.`,
          alt: `An outline of the human body showing the respiratory system; nose and mouth is labeled.`,
        },
        {
          id: "trachea",
          name: "Trachea",
          visualType: "",
          text: `<b>Trachea:</b> Oxygen (O<sub>2</sub>) moves from the mouth or nose through the trachea to the lungs. 
          Carbon dioxide (CO<sub>2</sub>) moves from the lungs through the trachea and out of the body through the mouth or nose.`,
          textLabel: `Trachea: Oxygen (O2) moves from the mouth or nose through the trachea to the lungs. 
          Carbon dioxide (C O2) moves from the lungs through the trachea and out of the body through the mouth or nose.`,
          alt: `An outline of the human body showing the respiratory system; trachea is labeled.`,
        },
        {
          id: "lungs",
          name: "Lungs",
          visualType: "video",
          videoSrc: lungs,
          text: `<b>Lungs:</b> The lungs supply the bloodstream with oxygen (O<sub>2</sub>). 
          Tiny air sacs in the lungs called alveoli are the sites where gas is exchanged 
          between the respiratory and circulatory systems.`,
          textLabel: `Lungs: The lungs supply the bloodstream with oxygen (O2). 
          Tiny air sacs in the lungs called alveoli are the sites where gas is exchanged 
          between the respiratory and circulatory systems.`,
          alt: `Gas exchange in the lungs; oxygen molecules are shown moving into 
          the area where the carbon dioxide molecules were housed.`,
        },
      ],
    },
    orthopedics: {
      id: "orthopedics",
      name: "Orthopedics",
      title: "Floor 3: Orthopedics",
      text: `As an orthopedist, you must become an expert in the functions of the <b>skeletal system</b>.`,
      textLabel: `As an orthopedist, you must become an expert in the functions of the skeletal system.`,
      alt: `An outline of the human body with the skeletal system shown; 
      a flat bone, a joint, and a long bone are labeled.`,
      hotspots: [
        {
          id: "flatBones",
          name: "Flat bone",
          visualType: "",
          text: `<b>Flat bone:</b> Flat bones include the cranium (skull) and rib cage. 
          Their primary function is to protect internal organs like the brain and heart from impacts and damage.`,
          textLabel: `Flat bone: Flat bones include the cranium (skull) and rib cage. 
          Their primary function is to protect internal organs like the brain and heart from impacts and damage.`,
          alt: `An outline of the human body showing the skeletal system, flat bones is labeled.`,
        },
        {
          id: "joint",
          name: "Joint",
          visualType: "",
          text: `<b>Joint:</b> Joints are the places where bones meet. Some open and close like door hinges, 
          and others allow complicated rolling or rotating movements. The human skeleton supports our bodies 
          and allows for movement. Some joints allow for back-and-forth movement, like our knee joints, 
          while others allow circular motions, such as our shoulder joints.`,
          textLabel: `Joint: Joints are the places where bones meet. Some open and close like door hinges, 
          and others allow complicated rolling or rotating movements. The human skeleton supports our bodies 
          and allows for movement. Some joints allow for back-and-forth movement, like our knee joints, 
          while others allow circular motions, such as our shoulder joints.`,
          alt: `An outline of the human body showing the skeletal system, joint is labeled.`,
        },
        {
          id: "longBone",
          name: "Long bone",
          visualType: "video",
          videoSrc: bone,
          text: `<b>Long bone:</b> Bone marrow is found inside long bones like this femur. 
          Long bones are where red blood cells, white blood cells, and platelets are created! 
          Additionally, long bones store calcium, phosphorus, sodium, and other minerals, 
          which are critical to bodily functions. If a person does not consume enough nutrients, 
          their bodies will begin to pull the minerals directly from the bones, causing their bones to become more brittle.`,
          textLabel: `Long bone: Bone marrow is found inside long bones like this femur. 
          Long bones are where red blood cells, white blood cells, and platelets are created! 
          Additionally, long bones store calcium, phosphorus, sodium, and other minerals, 
          which are critical to bodily functions. If a person does not consume enough nutrients, 
          their bodies will begin to pull the minerals directly from the bones, causing their bones to become more brittle.`,
          alt: `Close up of a long bone; yellow marrow with blood vessels is seen inside the bone.`,
        },
      ],
    },
    sportsMedicine: {
      id: "sportsMedicine",
      name: "Sports Medicine",
      title: "Floor 4: Sports Medicine",
      text: `As a sports medicine doctor, you must become an expert in the functions of the <b>muscular system</b>.`,
      textLabel: `As a sports medicine doctor, you must become an expert in the functions of the muscular system.`,
      alt: `An outline of the human body showing the muscular system; cardiac muscle, skeletal muscle, smooth muscle, and tendons are labeled.`,
      hotspots: [
        {
          id: "cardiacMuscle",
          name: "Cardiac muscle",
          visualType: "image",
          text: `<b>Cardiac muscle:</b> The heart is made up of a very special type of muscle called cardiac muscle. 
          Cardiac muscle is so specialized because it is the only muscle in the body designed to 
          keep the heart moving (pumping) for an individual’s entire life.`,
          textLabel: `Cardiac muscle: The heart is made up of a very special type of muscle called cardiac muscle. 
          Cardiac muscle is so specialized because it is the only muscle in the body designed to 
          keep the heart moving (pumping) for an individual’s entire life.`,
          alt: `Close-up of the human body with the muscular system shown; 
          pop-out image shows a closeup of striated cardiac muscle.`,
        },
        {
          id: "skeletalMuscle",
          name: "Skeletal muscle",
          visualType: "video",
          videoSrc: bicep,
          text: `<b>Skeletal muscle:</b> Skeletal muscles make up most of the organs of the muscular system. 
          These muscles work in pairs to move the body. Observe how the triceps and biceps work together to bend the patient’s arm.`,
          textLabel: `Skeletal muscle: Skeletal muscles make up most of the organs of the muscular system. 
          These muscles work in pairs to move the body. Observe how the triceps and biceps work together to bend the patient’s arm.`,
          alt: `Bicep and tricep muscles shown working in pairs; as one contracts, the other lengthens.`,
        },
        {
          id: "smoothMuscle",
          name: "Smooth muscle",
          visualType: "image",
          text: `<b>Smooth muscle:</b> Many organs in the human body are made of smooth muscle tissues. Digestive organs, 
          for example, perform involuntary muscle movement to move food through the entire digestive process. 
          Unlike skeletal muscles that require voluntary movement, 
          smooth muscles perform their movements without a person having to consciously think about it.`,
          textLabel: `Smooth muscle: Many organs in the human body are made of smooth muscle tissues. Digestive organs, 
          for example, perform involuntary muscle movement to move food through the entire digestive process. 
          Unlike skeletal muscles that require voluntary movement, 
          smooth muscles perform their movements without a person having to consciously think about it.`,
          alt: `Close-up of the human body with muscles; pop-out image shows a closeup of smooth abdominal muscle.`,
        },
        {
          id: "tendon",
          name: "Tendon",
          visualType: "image",
          text: `<b>Tendon:</b> Tendons connect bones and muscles. They act like rubber bands, expanding and contracting to help us move. 
          If a patient detaches their tendon from their bone due to an injury, 
          they will not be able to move that body part until it is medically reattached.`,
          textLabel: `Tendon: Tendons connect bones and muscles. They act like rubber bands, expanding and contracting to help us move. 
          If a patient detaches their tendon from their bone due to an injury, 
          they will not be able to move that body part until it is medically reattached.`,
          alt: `An outline of the human body with muscles; pop-out image shows a close-up 
          of the tendon that connects muscle and bone in the knee.`,
        },
      ],
    },
    gastroenterology: {
      id: "gastroenterology",
      name: "Gastroenterology",
      title: "Floor 5: Gastroenterology",
      text: `As a gastroenterologist, you must become an expert in the functions of the <b>digestive system</b>.`,
      textLabel: `As a gastroenterologist, you must become an expert in the functions of the digestive system.`,
      alt: `An outline of the human body with digestive system visible; mouth, stomach, large intestine, 
      small intestine, and rectum and anus are labeled.`,
      hotspots: [
        {
          id: "mouth",
          name: "Mouth",
          visualType: "",
          text: `<b>Mouth:</b> Digestion begins in the mouth. The teeth tear the food into smaller pieces. 
          Saliva mixes with the food and begins chemically breaking it down.`,
          textLabel: `Mouth: Digestion begins in the mouth. The teeth tear the food into smaller pieces. 
          Saliva mixes with the food and begins chemically breaking it down.`,
          alt: "An outline of the human body with the digestive system visible, mouth is labeled.",
        },
        {
          id: "stomach",
          name: "Stomach",
          visualType: "image",
          text: `<b>Stomach:</b> The stomach stores food and adds more chemicals. The churning of the food by the stomach muscles 
          helps physically break down the food. The stomach acid helps to chemically break down the food into molecules and 
          nutrients that can be used by the rest of the body.`,
          textLabel: `Stomach: The stomach stores food and adds more chemicals. The churning of the food by the stomach muscles 
          helps physically break down the food. The stomach acid helps to chemically break down the food into molecules and 
          nutrients that can be used by the rest of the body.`,
          alt: "An outline of the human body with the digestive system visible; pop-out image shows the liver, stomach, and gallbladder.",
        },
        {
          id: "smallIntestine",
          name: "Small intestine",
          visualType: "image",
          text: `<b>Small intestine:</b> The small intestine is about 20 feet long! Its internal walls are coated by villi, 
          fingerlike structures that pass the nutrients from the digested food to the bloodstream.`,
          textLabel: `Small intestine: The small intestine is about 20 feet long! Its internal walls are coated by villi, 
          fingerlike structures that pass the nutrients from the digested food to the bloodstream.`,
          alt: "An outline of the human body with digestive system visible; pop-out image shows the small intestine.",
        },
        {
          id: "largeIntestine",
          name: "Large intestine",
          visualType: "image",
          text: `<b>Large intestine:</b> The large intestine is about 5 feet long. It helps the body recover water used in digestion 
          and forms waste products after digestion. About 100 billion bacteria live in the large intestine.`,
          textLabel: `Large intestine: The large intestine is about 5 feet long. It helps the body recover water used in digestion 
          and forms waste products after digestion. About 100 billion bacteria live in the large intestine.`,
          alt: "An outline of the human body with the digestive system visible; pop-out image shows the large intestine.",
        },
        {
          id: "rectumAndAnus",
          name: "Rectum and anus",
          visualType: "image",
          text: `<b>Rectum and anus:</b> The rectum is where solid waste collects after digestion. 
          The anus is the opening where waste from digestion is excreted from the body.`,
          textLabel: `Rectum and anus: The rectum is where solid waste collects after digestion. 
          The anus is the opening where waste from digestion is excreted from the body.`,
          alt: "An outline of the human body with the digestive system visible; pop-out image shows the rectum and anus.",
        },
      ],
    },
    urology: {
      id: "urology",
      name: "Urology",
      title: "Floor 6: Urology",
      text: `As a urologist, you must become an expert in the functions of the <b>urinary system</b>.`,
      textLabel: `As a urologist, you must become an expert in the functions of the urinary system.`,
      alt: "An outline of the human body with the urinary system visible; the kidney and bladder are labeled.",
      hotspots: [
        {
          id: "kidney",
          name: "Kidney",
          visualType: "image",
          text: `<b>Kidney:</b> Kidneys are bean-shaped organs that help filter waste from the bloodstream. 
          A single kidney performs all of the body’s necessary blood filtering, which means that 
          humans can live a healthy life with just one kidney.`,
          textLabel: `Kidney: Kidneys are bean-shaped organs that help filter waste from the bloodstream. 
          A single kidney performs all of the body’s necessary blood filtering, which means that 
          humans can live a healthy life with just one kidney.`,
          alt: "An outline of the human body with the urinary system visible; pop-out image shows the kidneys and the veins and blood vessels supplying them.",
        },
        {
          id: "bladder",
          name: "Bladder",
          visualType: "image",
          text: `<b>Bladder:</b> The bladder is a hollow organ that stores urine. It is about the size of a grapefruit. 
          Humans excrete about a liter of liquid waste each day from the bladder through urination.`,
          textLabel: `Bladder: The bladder is a hollow organ that stores urine. It is about the size of a grapefruit. 
          Humans excrete about a liter of liquid waste each day from the bladder through urination.`,
          alt: "An outline of the human body with the urinary system visible; pop-out image shows the bladder.",
        },
      ],
    },
    obstetrics: {
      id: "obstetrics",
      name: "Obstetrics",
      title: "Floor 7: Obstetrics",
      text: `As an obstetrician, you must become an expert in the functions of the <b>reproductive system</b>.`,
      textLabel: `As an obstetrician, you must become an expert in the functions of the reproductive system.`,
      alt: `Outlines of a male and a female human body, each showing their reproductive systems; male testes are labeled; 
      female uterus and ovary are labeled.`,
      diagramLabel: ["Male reproductive system", "Female reproductive system"],
      hotspots: [
        {
          id: "ovary",
          name: "Ovary",
          visualType: "",
          text: `<b>Ovary:</b> The ovaries are located on either side of the uterus. 
          They hold the egg cells and produce female sex hormones.`,
          textLabel: `Ovary: The ovaries are located on either side of the uterus. 
          They hold the egg cells and produce female sex hormones.`,
          alt: "Outlines of a male and a female human body, each showing their reproductive systems, ovary is labeled.",
        },
        {
          id: "uterus",
          name: "Uterus",
          visualType: "",
          text: `<b>Uterus:</b> When a sperm cell fertilizes an egg cell, it travels to the uterus and can attach to the uterine walls. 
          The uterus houses the developing offspring before birth.`,
          textLabel: `Uterus: When a sperm cell fertilizes an egg cell, it travels to the uterus and can attach to the uterine walls. 
          The uterus houses the developing offspring before birth.`,
          alt: "Outlines of a male and a female human body, each showing their reproductive systems, uterus is labeled.",
        },
        {
          id: "testes ",
          name: "Testes",
          visualType: "",
          text: `<b>Testes:</b> The testes are located in the scrotum. 
          Their main functions are to make male sex hormones and produce sperm cells that carry DNA.`,
          textLabel: `Testes: The testes are located in the scrotum. 
          Their main functions are to make male sex hormones and produce sperm cells that carry DNA.`,
          alt: "Outlines of a male and a female human body, each showing their reproductive systems, testes is labeled.",
        },
      ],
    },
    dermatology: {
      id: "dermatology",
      name: "Dermatology",
      title: "Floor 8: Dermatology",
      text: `As a dermatologist, you must become an expert in the functions of the <b>integumentary system</b>.`,
      textLabel: `As a dermatologist, you must become an expert in the functions of the integumentary system.`,
      alt: "An outline of the human body; locations of hair, skin, and nails are labeled.",
      hotspots: [
        {
          id: "hair",
          name: "Hair",
          visualType: "",
          text: `<b>Hair:</b> Humans are born with about 5 million hair follicles. Hair on a person’s head helps regulate heat. 
          It helps insulate them and keep in the heat when they are cold, just like wearing a permanent hat.`,
          textLabel: `Hair: Humans are born with about 5 million hair follicles. Hair on a person’s head helps regulate heat. 
          It helps insulate them and keep in the heat when they are cold, just like wearing a permanent hat.`,
          alt: "An outline of the human body, hair is labeled.",
        },
        {
          id: "skin",
          name: "Skin",
          visualType: "image",
          text: `<b>Skin:</b> The skin is the largest organ of the human body, weighing around 10 pounds. 
          It covers a surface area of about 21 square feet! The skin is responsible for several body functions, 
          including protection of internal organs against impact, ultraviolet radiation, and fluid loss. 
          It also keeps contaminants out of the body, making it the first line of defense against diseases and viruses.
          The skin is also used for regulating the individual’s body temperature. 
          It excretes waste and sweat to help cool the body, but also insulates against cold. 
          Have you ever been told that you look sickly and need to go get some sunlight? There’s actually some truth behind that, 
          because the skin also converts sunlight into Vitamin D! Lastly, the skin receives information from the external environment, 
          including temperature and pressure/touch. The information is then passed to the nervous system for analysis.`,
          textLabel: `Skin: The skin is the largest organ of the human body, weighing around 10 pounds. 
          It covers a surface area of about 21 square feet! The skin is responsible for several body functions, 
          including protection of internal organs against impact, ultraviolet radiation, and fluid loss. 
          It also keeps contaminants out of the body, making it the first line of defense against diseases and viruses.
          The skin is also used for regulating the individual’s body temperature. 
          It excretes waste and sweat to help cool the body, but also insulates against cold. 
          Have you ever been told that you look sickly and need to go get some sunlight? There’s actually some truth behind that, 
          because the skin also converts sunlight into Vitamin D! Lastly, the skin receives information from the external environment, 
          including temperature and pressure/touch. The information is then passed to the nervous system for analysis.`,
          alt: "An outline of the human body; pop-out image shows a close up of layers of the skin.",
        },
        {
          id: "nails",
          name: "Nails",
          visualType: "",
          text: `<b>Nails:</b> Men’s nails grow faster than women’s nails, and nails grow faster in summer than in winter! 
          Their main function is to protect the bones of the fingers and toes.`,
          textLabel: `Nails: Men’s nails grow faster than women’s nails, and nails grow faster in summer than in winter! 
          Their main function is to protect the bones of the fingers and toes.`,
          alt: "An outline of the human body, nails is labeled.",
        },
      ],
    },
    neurology: {
      id: "neurology",
      name: "Neurology",
      title: "Floor 9: Neurology",
      text: `As a neurologist, you must become an expert in the functions of the <b>nervous system</b>.`,
      textLabel: `As a neurologist, you must become an expert in the functions of the nervous system.`,
      alt: "An outline of the human body showing the nervous system; the brain, spinal cord, and nerves are visible and labeled.",
      hotspots: [
        {
          id: "brain",
          name: "Brain",
          visualType: "image",
          text: `<b>Brain:</b> Our brains help us with language, thought, attention, memory, and imagination. 
          The brain is separated into different lobes that are responsible for different tasks. 
          It receives messages from the nerves and makes decisions for the entire body. 
          If a patient experiences a concussion, it is common to have memory loss because memories are stored in the frontal lobe, 
          located at the front of the head.`,
          textLabel: `Brain: Our brains help us with language, thought, attention, memory, and imagination. 
          The brain is separated into different lobes that are responsible for different tasks. 
          It receives messages from the nerves and makes decisions for the entire body. 
          If a patient experiences a concussion, it is common to have memory loss because memories are stored in the frontal lobe, 
          located at the front of the head.`,
          alt: `An outline of the human body showing the nervous system; pop-out image shows a close-up of the brain with 
          the different lobes highlighted.`,
          labels: [
            {
              id:"frontalLobe",
              name: "Frontal lobe"
            },

            {
              id:"parietalLobe",
              name: "Parietal lobe"
            },
            {
              id:"occipitalLobe",
              name: "Occipital lobe"
            },
            {
              id:"cerebellum",
              name: "Cerebellum"
            },
            {
              id:"brainstem",
              name: "Brainstem"
            },
            {
              id:"temporalLobe",
              name: "Temporal lobe"
            },
          ]
        },
        {
          id: "spinalCord",
          name: "Spinal cord",
          visualType: "",
          text: `<b>Spinal cord:</b> The spinal cord links the nerves with the brain and carries information between them. 
          It communicates pain and pressure to the brain. During some surgeries, patients receive spinal blocker 
          injections directly into the spinal cord to block the pain messages being sent to the brain.`,
          textLabel: `Spinal cord: The spinal cord links the nerves with the brain and carries information between them. 
          It communicates pain and pressure to the brain. During some surgeries, patients receive spinal blocker 
          injections directly into the spinal cord to block the pain messages being sent to the brain.`,
          alt: `An outline of the back of the human body showing the nervous system; spinal cord is labeled.`
        },
        {
          id: "nerves",
          name: "Nerves",
          visualType: "video",
          videoSrc: nerves,
          text: `<b>Nerves:</b> The nerves sense changes in the environment and transmit that information to the spinal cord, 
          where it is carried to the brain for analysis. They also send information from the spinal cord to the 
          muscles and organs. The nervous system coordinates all of the voluntary and involuntary movements of the body. 
          It also responds to stimuli in the environment so we can adapt.`,
          textLabel: `Nerves: The nerves sense changes in the environment and transmit that information to the spinal cord, 
          where it is carried to the brain for analysis. They also send information from the spinal cord to the 
          muscles and organs. The nervous system coordinates all of the voluntary and involuntary movements of the body. 
          It also responds to stimuli in the environment so we can adapt.`,
          alt: "Electrical impulses shown traveling from nerves to the spinal cord to the brain and back",
        },
      ],
    },
    endocrinology: {
      id: "endocrinology",
      name: "Endocrinology",
      title: "Floor 10: Endocrinology",
      text: `As an endocrinologist, you must become an expert in the functions of the <b>endocrine system</b>.`,
      textLabel: `As an endocrinologist, you must become an expert in the functions of the endocrine system.`,
      alt: `Outlines of a male and a female human body, each showing the endocrine system; pituitary gland, 
      thyroid gland, and adrenal glands are labeled.`,
      diagramLabel: ["Male endocrine system", "Female endocrine system"],
      hotspots: [
        {
          id: "pituitaryGland",
          name: "Pituitary gland",
          visualType: "image",
          text: `<b>Pituitary gland:</b> The pituitary gland is located at the base of the brain and releases hormones that control growth, 
          reproduction, and stress.`,
          textLabel: `Pituitary gland: The pituitary gland is located at the base of the brain and releases hormones that control growth, 
          reproduction, and stress.`,
          alt: `Outlines of a male and a female human body, each showing the endocrine system;  pop-out image shows the pituitary 
          gland located in the head.`,
        },
        {
          id: "thyroidGland",
          name: "Thyroid gland",
          visualType: "image",
          text: `<b>Thyroid gland:</b> The thyroid gland is located in the neck and releases hormones that control metabolism and growth.`,
          textLabel: `Thyroid gland: The thyroid gland is located in the neck and releases hormones that control metabolism and growth.`,
          alt: `Outlines of a male and a female human body, each showing the endocrine system; pop-out image shows the thyroid 
          gland located in the throat.`,
        },
        {
          id: "adrenalGlands",
          name: "Adrenal glands",
          visualType: "image",
          text: `<b>Adrenal glands:</b> Located on the kidneys, the adrenal glands control the amount of adrenaline in your body. 
          Adrenaline is the hormone that prepares the body to defend against or escape from physical threats.`,
          textLabel: `Adrenal glands: Located on the kidneys, the adrenal glands control the amount of adrenaline in your body. 
          Adrenaline is the hormone that prepares the body to defend against or escape from physical threats.`,
          alt: `Outlines of a male and a female human body, each showing the endocrine systems;  pop-out image shows the adrenal 
          glands located on top of the kidneys.`,
        },
      ],
    },
    immunology: {
      id: "immunology",
      name: "Immunology",
      title: "Floor 11: Immunology",
      text: `As an immunologist, you must become an expert in the functions of the <b>immune system</b>.`,
      textLabel: `As an immunologist, you must become an expert in the functions of the immune system.`,
      alt: `An outline of the human body showing the main organs; bones are visible in the legs. 
      The spleen and bone marrow are labeled and visible.`,
      hotspots: [
        {
          id: "spleen",
          name: "Spleen",
          visualType: "",
          text: `<b>Spleen:</b> The spleen is an organ that filters blood and destroys old red blood cells. 
          It also controls the amount of blood cells in the bloodstream. More white blood cells are produced when they are needed 
          to fight off disease-causing invaders such as viruses and bacteria.`,
          textLabel: `Spleen: The spleen is an organ that filters blood and destroys old red blood cells. 
          It also controls the amount of blood cells in the bloodstream. More white blood cells are produced when they are needed 
          to fight off disease-causing invaders such as viruses and bacteria.`,
          alt: `An outline of the human body showing the main organs; spleen is labeled.`,
        },
        {
          id: "boneMarrow",
          name: "Bone marrow",
          visualType: "image",
          text: `<b>Bone marrow:</b> Bone marrow is where blood cells are created. White blood cells seek out and destroy viruses and bacteria 
          that would otherwise harm the body. This system remembers every virus and microbe that it has ever encountered and 
          fought so that it can recognize and destroy it again before the microbe or virus replicates in the body. 
          Immunizations copy this natural response to teach the body to fight a potential future invader before the body encounters it.`,
          textLabel: `Bone marrow: Bone marrow is where blood cells are created. White blood cells seek out and destroy viruses and bacteria 
          that would otherwise harm the body. This system remembers every virus and microbe that it has ever encountered and 
          fought so that it can recognize and destroy it again before the microbe or virus replicates in the body. 
          Immunizations copy this natural response to teach the body to fight a potential future invader before the body encounters it.`,
          alt: `Bones are visible in the legs;  pop-out image shows blood cells being created in the bone marrow of the leg bone.`,
          labels: [
            {
              id: "rbs",
              name: "Red Blood Cells",
            },
            {
              id: "wbc",
              name: "White Blood Cells",
            },
          ],
        },
      ],
    },
  },
};

export default data;
