
const weeks = {};

// Example: Week 1 (You can fill all weeks like this)
weeks[0] = [
  {
    question: "If you want to learn about cause and effect, you must use the experimental method",
    options: ["True","False"],
    answer: 0
  },
  {
    question: "It is easier to recognize the letter \"X\" within the word \"TEXT\" than the letter \"X\" presented on its own",
    options: ["True","False"],
    answer: 1
  },
  {
    question: "Suppose you look at a vehicle and end up by just remembering ---nda' from the manufacturers name. You then come up with the Honda to the manufacturer's name. You have used",
    options: ["bottom up processing","top down processing","primacy effect","recency effect"],
    answer: 1
  },
  {
    question: "Eye witness testimony are mostly flawed. A optimal method for improving the accuracy of such testimony is",
    options: ["police interview","hypnosis","cognitive interview","cued recall"],
    answer: 2
  },
  {
    question: "Ramu is given directions to village temple. After some time he remembers only the first couple of instructions. This phenomena illustrates",
    options: ["primacy effect","recency effect","forgetting","availability"],
    answer: 0
  },
  {
    question: "The belief that most of our abilities and tendencies are with us from birth is known as",
    options: ["nativism","empiricism","associationism","introspection"],
    answer: 0
  },
  {
    question: "Noam Chomsky revolutionized the field of and showed how behaviorism could not adequately explain language",
    options: ["neuroscience","computer science","human factors","linguistics"],
    answer: 3
  },
  {
    question: "That guest star on your favorite television show looks familiar. You're sure that you've seen him before, but you can't think of his name. The fact that you know you have seen the face before",
    options: ["perception","attention","recognition","Orecall"],
    answer: 2
  },
  {
    question: "The belief that psychological phenomena cannot be reduced to simple elements but must be studied in their entirety is central to the school known as",
    options: ["Structuralism","Gestalt psychology","Functionalism.","Behaviorism"],
    answer: 1
  },
  {
    question: "A body of knowledge structured according to what its proponents consider important, which guides research topics and research methods, is called a",
    options: ["paradigm","hypothesis","methodology","metaphor"],
    answer: 0
  }
];

weeks[1] = [
  {
    question: "The school of psychology known as functionalism, which emphasized the purposes of the mind’s operations, was founded by:",
    options: ["Wilhelm Wundt","John Watson","William James","Edward Titchener"],
    answer: 2
  },
  {
    question: "The fact that you know you have seen the face before but cannot remember the name of the person, illustrates the cognitive process of:",
    options: ["perception","attention","recognition","recall"],
    answer: 2
  },
  {
    question: "The term refers to the relevance of the research to the “real world.”",
    options: ["Internal validity","Evolutionary validity","Ecological validity","Neural validity"],
    answer: 2
  },
  {
    question: "challenged the assumption that mental events were beyond the real of scientific study.",
    options: ["Cognitive revolution","Behaviorist rebellion","Human factor movements","Universal grammar"],
    answer: 0
  },
  {
    question: "Since the 1970s, various techniques of have allowed us to construct pictures of the anatomy and functioning of intact brains.",
    options: ["Genetic engineering","Brain Imaging","Neurosurgery","Brain lesioning"],
    answer: 1
  },
  {
    question: "Historians date the founding of scientific psychology to the 1879 laboratory of:",
    options: ["William James","Wilhelm Wundt","John Locke","Edward Titchener"],
    answer: 1
  },
  {
    question: "The term “limited capacity processors” suggests that:",
    options: ["Humans have limited memory storage","Human beings can only do so many things at once","Neurons can only fire at a certain rate","Processing in the brain occurs in parallel"],
    answer: 1
  },
  {
    question: "This psychologist sought to describe the intellectual structures underlying cognitive experience at different developmental points through an approach he called genetic epistemology:",
    options: ["Galton","Skinner","Wundt","Piaget"],
    answer: 3
  },
  {
    question: "Clinical interviews are to introspection as are to .",
    options: ["Naturalistic observations; experiments","Naturalistic observations; quasi experiments","Controlled observations; naturalistic observations","Controlled observations; experiments"],
    answer: 2
  },
  {
    question: "Which of the following is a basic assumption of the connectionist approach?",
    options: ["Serial processing","Multiple stores where information is kept throughout processing","Networks of connections among simple processing units","A central processor that directs the flow of information"],
    answer: 2
  }
];

weeks[2] = [
  {
    question: "A toy on the table represents",
    options: ["Distal stimulus","Proximal stimulus","Retinal image","Percept"],
    answer: 0
  },
  {
    question: "A patient with prosopagnosia has difficulty recognizing:",
    options: ["Drawing of objects.","Moving objects.","Faces.","Sounds."],
    answer: 2
  },
  {
    question: "When you let go of a balloon and it floats away from you into the sky, the size of the retinal image gets smaller and smaller. However, you do not perceive the balloon as shrinking. This is an example of:",
    options: ["Pattern recognition.","Bottom-up processing.","Size constancy.","Figure-ground organization."],
    answer: 2
  },
  {
    question: "The meaningful interpretation of a proximal stimulus is called the:",
    options: ["Percept.","Sensation.","Distal stimulus.","Retinal Image"],
    answer: 0
  },
  {
    question: "The two best studied forms of perception are:",
    options: ["Visual and Haptic","Visual and Olfactory","Visual and Auditory","Auditory and Olfactory"],
    answer: 2
  },
  {
    question: "Which of the following represents a good example of a proximal stimulus?",
    options: ["A book on a shelf.","A tree in your yard.","A building on the horizon.","The retinal image formed by a tree."],
    answer: 3
  },
  {
    question: "According to Gibson’s theory, the acts or behaviors permitted by objects, places and events are called:",
    options: ["Consequences","Functions","Affordances","Direct processes"],
    answer: 2
  },
  {
    question: "A stencil provides a good analogy for the theory of:",
    options: ["Prototype matching.","Template matching.","Good continuation.","Featural analysis."],
    answer: 1
  },
  {
    question: "are to visual perception what phonemes are to language, according to Biederman.",
    options: ["Receptors","Retinas","Distal stimuli","Geons"],
    answer: 3
  },
  {
    question: "The principle governing reversible figures is:",
    options: ["Figure-ground organization","Size constancy","Dimensionality","Retinal imagery"],
    answer: 0
  }
];

weeks[3] = [
  {
    question: "According to Attenuation theory of Treisman, people tend to process:",
    options: ["Only to the level of physical characteristics","Only to the level of linguistic characteristics, separating it into words","At a semantic level, analysing for meaning most of the time","Only as much as is necessary to separate the attended from the unattended message"],
    answer: 3
  },
  {
    question: "The “cocktail party effect” refers to the fact that shadowing performance is disrupted when is embedded in the unattended message.",
    options: ["Backward speech","The listener’s name","A section of repeated words","Music"],
    answer: 1
  },
  {
    question: "In Kahneman’s model of attention, allocation of mental resources is affected by preferences for certain kinds of tasks over others. These preferences are known as:",
    options: ["Enduring dispositions","Arousal states","Late selected preferences","Momentary intentions"],
    answer: 0
  },
  {
    question: "The word “cat” is by the phrase “The dog chased the….” That is, the word cat is especially ready to be recognized or attended to.",
    options: ["filtered","attenuated","primed","suggested"],
    answer: 2
  },
  {
    question: "When listening to a conversation, your attention is momentarily diverted when you hear your name spoken in a different conversation across the room. This is an example of the:",
    options: ["filter effect","dichotic listening phenomenon","cocktail party effect","attenuation effect"],
    answer: 2
  },
  {
    question: "Which of the following would NOT be a reasonable basis for filtering, according to Broadbent’s model?",
    options: ["Whether the message was coming from your right or your left side","The pitch of the voice reading the message","The loudness of the voice reading the message","The language that the message was being read in"],
    answer: 3
  },
  {
    question: "Cognitive psychologists use all of the following as criteria for determining whether an activity is automatic EXCEPT:",
    options: ["Whether it occurs intentionally","Whether it gives rise to conscious awareness","Whether it interferes with other activities","Whether it requires mental filtering"],
    answer: 3
  },
  {
    question: "Certain stimuli seem to jump off the page at the viewer, causing an involuntary shift of attention that is referred to as:",
    options: ["The Stroop effect","Attentional capture","Attenuation","The cocktail party effect"],
    answer: 1
  },
  {
    question: "Stroop interference lessens when:",
    options: ["Participants are better readers.","Participants are given more practice at naming colours.","Participants are girls rather than boys.","Participants are encouraged to focus carefully."],
    answer: 1
  },
  {
    question: "Research on divided attention suggests that:",
    options: ["Some people can multitask without any drop in performance.","There are no limits on the number of things that we can successfully do at once.","As individual tasks becomes more demanding, multitasking becomes more efficient.","If you think that you are doing two things simultaneously, you are probably really switching attention back and forth between the two."],
    answer: 3
  }
];

weeks[4] = [
  {
    question: "Which of the following is NOT a component of Baddeley’s working memory model?",
    options: ["The phonological loop","The icon","The central executive","The visuospatial sketchpad"],
    answer: 1
  },
  {
    question: "Sternberg’s classic work on searching for information from short-term memory indicated that the search process is:",
    options: ["Serial","Self - terminating","Parallel","Both serial and exhaustive"],
    answer: 3
  },
  {
    question: "In the absence of rehearsal, short-term memory tends to:",
    options: ["Last about 20 seconds","Last about 8 seconds","Decay slowly over 24 hours","Decay slowly over a week"],
    answer: 0
  },
  {
    question: "The suffix effect relates to which type of memory?",
    options: ["Iconic","Echoic","Short term","Working"],
    answer: 1
  },
  {
    question: "Unattended information is stored briefly in:",
    options: ["Sensory memory","Short-term memory","Long-term memory","Working memory"],
    answer: 0
  },
  {
    question: "Retrieval involves:",
    options: ["The activation of the senses","The translation of information into a form that can be stored","The storage of information over time","The calling to mind of previously stored information"],
    answer: 3
  },
  {
    question: "The primacy and recency effects in memory:",
    options: ["Are thought to be due to the action of short-term memory","Are thought to be due to the action of long-term memory","Are thought to be due to the action of sensory memory","Can be independently manipulated, indicating at least two types of memory at work"],
    answer: 3
  },
  {
    question: "Information in short-term memory is assumed to be coded primarily by:",
    options: ["Sound","Meaning","Visual appearance","Both sound and meaning"],
    answer: 0
  },
  {
    question: "Repeating a phone number to yourself to hold it in memory while you dial it would use which component of working memory?",
    options: ["The visuospatial sketchpad","The phonological loop","The episodic buffer","Both the visuospatial sketchpad and the phonological loop"],
    answer: 1
  },
  {
    question: "Disrupting the process of long-term potentiation leads to:",
    options: ["Disruption of learning and remembering","Recovery from anterograde amnesia","Recovery from retrograde amnesia","Language deficits"],
    answer: 0
  }
];

weeks[5] = [
  {
    question: "As classically conceived, long-term memory is held to have all of the following properties EXCEPT:",
    options: ["It comprises a permanent or at least semi permanent store","It has virtually unlimited capacity","It primarily uses acoustic coding","Information stored within it is not always easily accessible"],
    answer: 2
  },
  {
    question: "Psychologists believe that the capacity of long-term memory is:",
    options: ["unlimited","7 + 2 items","18 items","5000 items"],
    answer: 0
  },
  {
    question: "Which of the following are most likely to be confused in long-term memory?",
    options: ["The letters P and R","The letters C and B","The words “see” and “bee”","The words “big” and “large”"],
    answer: 3
  },
  {
    question: "The code in long-term memory is based on:",
    options: ["Sound","Visual imagery","Meaning","Both sound and visual imagery"],
    answer: 2
  },
  {
    question: "Your memory for how to ride a bicycle is an example of memory.",
    options: ["Explicit","Implicit","Declarative","Procedural"],
    answer: 3
  },
  {
    question: "A retrieval cue will be most effective when it is highly distinctive or unusual, according to the principle of:",
    options: ["Cue overload","Encoding specificity","Mood dependence","State dependence"],
    answer: 0
  },
  {
    question: "Context effects and state-dependent learning effects occur:",
    options: ["For recall tests only","For recognition tests only","For both recall and recognition","For paired associate tests only"],
    answer: 0
  },
  {
    question: "Bahrick’s study of retention of Spanish vocabulary words showed that large portions of information remained in long-term memory for:",
    options: ["Several months","1-2 years","Up to 5 years","Over 50 years"],
    answer: 3
  },
  {
    question: "Techniques designed to improve memory, often involving the use of visual imagery, are called:",
    options: ["Mnemonics","Eidetic","Iconic","IQ enhancers"],
    answer: 0
  },
  {
    question: "Your memory of your first college lecture would be an example of:",
    options: ["Semantic memory","Episodic memory","Implicit memory","Working memory"],
    answer: 1
  }
];

weeks[6] = [
  {
    question: "According to the notion of cognitive economy, a characteristic like “has wings” would be stored along with which of the following semantic memory nodes.",
    options: ["Bird","Ostrich","Hummingbird","All of the above"],
    answer: 0
  },
  {
    question: "Priming in lexical decision tasks may be explained by the idea of:",
    options: ["Episodic memory","Encoding specificity","Spreading activation","Typicality effects"],
    answer: 2
  },
  {
    question: "Which of the following is a good example of a superordinate level of categorization?",
    options: ["Fruit","Banana","Fuji apple","Golden delicious apple"],
    answer: 0
  },
  {
    question: "The schema view of concept formation assumes that:",
    options: ["There are clear boundaries among individual schemata","There is cognitive economy among concepts","Information is abstracted across instances","No information is stored about actual instances"],
    answer: 2
  },
  {
    question: "According to research by Collins and Quillian, the statement “Siamese cats have blue eyes” will be verified:",
    options: ["Slower than “Siamese cats give birth to live young”","Faster than “Siamese cats give birth to live young”","In the same amount of time as “Siamese cats give birth to live young”","Slower than “Siamese cats have tails”"],
    answer: 1
  },
  {
    question: "Conrad has found evidence that the statement “A shark can move” can be verified in the same amount of time as “An animal can move.” These results suggest that reaction time is best predicted by:",
    options: ["Cognitive economy","Frequency of associations","Encoding specificity","Episodic memory"],
    answer: 1
  },
  {
    question: "Which of the following would be a part of your declarative memory system?",
    options: ["Knowing how to ride a bicycle","Knowing how to drive a car","Knowing how to react a red light","Being able to name a hybrid car"],
    answer: 3
  },
  {
    question: "Collins and Loftus’s spreading activation theory differs from the hierarchical network theory in that:",
    options: ["It dispenses with the idea of cognitive economy","It relies on the assumption of hierarchical structure","It cannot account for the typicality effect","It makes stronger predictions than hierarchical models"],
    answer: 0
  },
  {
    question: "“Characteristic features” and “family resemblance” are important aspects of the view of concepts.",
    options: ["Classical","Prototype","Exemplar","Schema"],
    answer: 1
  },
  {
    question: "Studies of semantic memory have shown that in a lexical decision task, people are faster at responding to the stimulus “bread” if it is paired with a stimulus such as:",
    options: ["“rencle”","“dog”","“island”","“butter”"],
    answer: 3
  }
];

weeks[7] = [
  {
    question: "According to the view of concepts, people categorize new instances by comparing them to representations of previously stored instances.",
    options: ["Classical","Prototype","Exemplar","Schema"],
    answer: 2
  },
  {
    question: "According to the typicality effect, the statement “A dog is a household pet” should be verified:",
    options: ["Faster than “a poodle is a household pet”","Faster than “a dog is a living thing”","Faster than “a ferret is a household pet”","Faster than “a dog is an animal”"],
    answer: 2
  },
  {
    question: "Which of the following would be considered an example of a “natural kind” concept?",
    options: ["Blue","Wolf","Odd number","Mirror"],
    answer: 1
  },
  {
    question: "A schema for a routine event, such as going to the dentist, is called a:",
    options: ["Concept","Script","Exemplar","Category"],
    answer: 1
  },
  {
    question: "A is a mental representation of some object, event, or pattern.",
    options: ["Category","Concept","Script","Memory"],
    answer: 1
  },
  {
    question: "A can be defined as a class of similar things that share either an essential core, or some similarity in perceptual, biological, or functional properties.",
    options: ["Category","Concept","Script","Schema"],
    answer: 0
  },
  {
    question: "Which of the following is NOT TRUE of the classical view of concepts?",
    options: ["It proposes that concepts are mentally represented by list of features.","It assumes that membership in a category is clear-cut.","It accurately predicts the typicality effect.","‘Necessity’ and ‘sufficient’ features play an important role in the theory."],
    answer: 2
  },
  {
    question: "Which of the following is a good example of a basic level of categorization?",
    options: ["Musical instrument","Piano","Electronic keyboard","String instrument"],
    answer: 1
  },
  {
    question: "If “soda” is a basic-level category, then would be a subordinate level.",
    options: ["Soft drink","Beverage","Drink","Coca-Cola"],
    answer: 3
  },
  {
    question: "The view of concepts argues that a person uses his/her theories about the way the world works to justify the classification of instances in the same category.",
    options: ["Classical","Prototype","Knowledge based","Schema"],
    answer: 2
  }
];

weeks[8] = [
  {
    question: "Participants doing mental imagery tasks tend to show brain activity in the:",
    options: ["Temporal lobe","Parietal lobe","Frontal lobe","Occipital lobe"],
    answer: 3
  },
  {
    question: "How do people represent and navigate in and through space? This is a question of",
    options: ["Navigational cognition","Representational cognition","Spatial cognition","Visual cognition"],
    answer: 2
  },
  {
    question: "Images can prime the visual pathway, making it easier to detect a faint stimulus. This is an example of:",
    options: ["Perceptual equivalence","Spatial equivalence","Structural equivalence","Transformational equivalence"],
    answer: 0
  },
  {
    question: "Which of the following questions would take you the LONGEST TIME to answer?",
    options: ["Which is faster, a turtle or a sports car?","Which is faster, a turtle or a cheetah?","Which is faster, a snail or a caterpillar?","Which is faster, a caterpillar or a cat?"],
    answer: 2
  },
  {
    question: "The relational-organizational hypothesis is supported by:",
    options: ["The effectiveness of the method of loci","The fact that concrete words are recalled better than abstract words","The fact that non-interactive images do not facilitate recall whereas interactive images do facilitate recall","The effectiveness of the pegword method"],
    answer: 2
  },
  {
    question: "Paivio’s hypothesis argues that long-term memory contains two separate systems that represent information in verbal and visual forms, respectively.",
    options: ["Picture-word","Dual code","Visuo-verbal","Relational-Organizational"],
    answer: 1
  },
  {
    question: "Which of the following methods would most help you to remember the word pair “elephant-cigar”?",
    options: ["Repeating the word elephant over and over while visualizing a cigar","Visualizing an elephant smoking a cigar","Repeating both words over and over to yourself","Visualizing an elephant and a cigar, not touching each other"],
    answer: 1
  },
  {
    question: "Your mental map of your campus is probably:",
    options: ["Larger than reality","Smaller than reality","More regular, with more straight lines and right angles, than reality","Less regular, with fewer straight lines and right angles, than reality"],
    answer: 2
  },
  {
    question: "Finke’s principle of states that mental imagery allows us to retrieve information that was not intentionally stored.",
    options: ["Perceptual equivalence","Transformational equivalence","Implicit encoding","Structural encoding"],
    answer: 2
  },
  {
    question: "A propositional representation is thought to be in nature.",
    options: ["Verbal","Visual","Both verbal and visual","Neither verbal nor visual"],
    answer: 3
  }
];

weeks[9] = [
  {
    question: "Which of the following is/are generally agreed upon as necessary criteria/criterion for claiming that a communication system is a language?",
    options: ["Regularity","Productivity","Referentiality","Both regularity and productivity"],
    answer: 3
  },
  {
    question: "Infinite combinations of ideas can be expressed in language. In other words language is:",
    options: ["Regular","Interpersonal","Productive","Referential"],
    answer: 2
  },
  {
    question: "A fundamental problem of speech perception, according to Miller, is that:",
    options: ["Speech is discrete rather than continuous","A single phoneme sounds different depending on its context","Hearing is a less accurate rather than vision","Missing phonemes can render words incomprehensible"],
    answer: 1
  },
  {
    question: "The branch of linguistics devoted to the study of meaning:",
    options: ["Phonetics","Semantics","Morphology","Pragmatics"],
    answer: 1
  },
  {
    question: "Did she say “many” or “men knee”? This type of ambiguity is referred to as:",
    options: ["Phonetic","Lexical","Syntactic","Semantic"],
    answer: 0
  },
  {
    question: "The underlying knowledge that allows people to produce and comprehend their language is called:",
    options: ["Linguistic performance","Linguistic competence","Linguistic production","Grammatical behaviour"],
    answer: 1
  },
  {
    question: "The study of the ways in which sounds can be combined in any given language is called:",
    options: ["Phonology","Morphology","Syntax","Grammar"],
    answer: 0
  },
  {
    question: "We notice ambiguities in sentences:",
    options: ["All the time","In “garden path” sentences","When they are humorous","When they make no sense at all"],
    answer: 1
  },
  {
    question: "According to research, which of the following sets of sentences would take the longest amount of time to read and comprehend?",
    options: ["We took the dog to the vet. The dog was nervous.","Sara drove the car to the market. The car ran out of gas.","She wrapped the Christmas presents. The sweater needed a larger box.","We got some beer out of the car. The beer was warm."],
    answer: 2
  },
  {
    question: "Speech acts in which the utterance itself is the action—such as “You’re fired!” are considered to be which type of speech act?",
    options: ["Declaration","Directive","Commissive","Expressive"],
    answer: 0
  }
];

weeks[10] = [
  {
    question: "is defined as “going beyond the information given.”",
    options: ["Problem solving","Thinking","Decision making","Remembering"],
    answer: 1
  },
  {
    question: "Which of the following is an example of an ill-defined problem?",
    options: ["Putting together your schedule of classes for next semester","Constructing a proof in geometry","Solving an algebra problem","Solving the Tower of Hanoi problem"],
    answer: 0
  },
  {
    question: "The problem-solving technique of involves comparing the goal with the starting point, thinking of possible ways to overcome the distance between them, and choosing the best one.",
    options: ["Generate and test","Means end analysis","Reasoning by analogy","Mental set"],
    answer: 1
  },
  {
    question: "Mental set:",
    options: ["Can only be induced by large amount of practice","Can lead us to make unwarranted assumption about a problem","Involves the use of analogy to solve a problem","Aids problem solving because it supplies an efficient problem representation"],
    answer: 1
  },
  {
    question: "When one recalls the solution to an old problem and uses it to solve a new, similarly structured problem, one has reasoned by:",
    options: ["Introspection","Analysis","Analogy","Backtracking"],
    answer: 2
  },
  {
    question: "is a very important technique for solving the Towers of Hanoi problem.",
    options: ["Means-end analysis","Generate-and-test","Working backward","Trial and error"],
    answer: 2
  },
  {
    question: "Which of the following is the best example of a well-defined problem?",
    options: ["Creating a guest list for a party","Finding a detour around a traffic problem","Constructing a proof in algebra","Writing a paper for your cognition class"],
    answer: 2
  },
  {
    question: "Psychologists focus on well-defined problems because:",
    options: ["They are easy to present","They often take weeks or months to solve","They can be complicated to score","They accurately mirror real world problems"],
    answer: 0
  },
  {
    question: "Adoption of a rigid mental set toward an object is called:",
    options: ["Well-defined thinking","Ill-defined thinking","Functional fixedness","Object set"],
    answer: 2
  },
  {
    question: "The General Problem Solver (GPS) is a computer program that solves problems in crypt arithmetic and logic using:",
    options: ["Mean end analysis","Generate-and-test","Reasoning by analogy","Introspection"],
    answer: 0
  }
];

weeks[11] = [
  {
    question: "Deductive reasoning involves which of the following?",
    options: ["Going from general to specific statements","Conclusions that add new information to what is given","Going from specific to general statements","Going from specific to specific statements"],
    answer: 0
  },
  {
    question: "If a person has five letters in his or her name, then s/he is a Glirple. I can now validly assume that:",
    options: ["Shawn is a Glirple","Shawn is a Glirple, and anyone who is not a Glirple cannot be name Susan","Anyone who is a Glirple must have five letters in his/her name","Anyone who is not a Glirple cannot be name Susan"],
    answer: 1
  },
  {
    question: "When we assess probability by judging the ease with which relevant examples come to mind, we are using the heuristic of:",
    options: ["Representativeness","Availability","Framing","Hindsight"],
    answer: 1
  },
  {
    question: "Which type of reasoning results in conclusions that contain new information?",
    options: ["Inductive reasoning","Deductive reasoning","Invalid reasoning","Both inductive and deductive reasoning"],
    answer: 0
  },
  {
    question: "If performed correctly, deductive reasoning can be said to have . This means that it is impossible for the premises to be true and the conclusion to be false.",
    options: ["Inductive strength","Deductive strength","Inductive validity","Deductive validity"],
    answer: 3
  },
  {
    question: "If a person has five letters in his/her name, then s/he is a Glirple. Angie now reasons that Fred cannot possibly be a Glirple. Angie has:",
    options: ["Made a correct inference to modus ponens","Made a correct inference to modus tollens","Committed the fallacy of denying the antecedent","Committed the fallacy of affirming the consequent"],
    answer: 2
  },
  {
    question: "When Wason’s four-card task is replaced with an everyday problem about checking the identification of people who are drinking Coke and beer.",
    options: ["People still neglect modus tollens in their responses","People turn over all the four cards instead of the two that are necessary and sufficient","People turn over only one card instead of the two that are necessary and sufficient","About 75% participants solve the problem correctly"],
    answer: 3
  },
  {
    question: "Some members of the Jones family are tall. Some tall people play basketball. Which of the following is true?",
    options: ["Logically, some members of the Jones family play basketball","Logically, no members of the Jones family play basketball","Most people assume that some people of the Jones family play basketball","Most people assume that all members of the Jones family play basketball"],
    answer: 2
  },
  {
    question: "The ease of reasoning about an analogy depends on all of these factors EXCEPT:",
    options: ["The difficulty of comprehending the individual terms in the analogy","The reasoner’s knowledge about the individual terms","The difficulty of finding a relationship between the first two terms","The reasoner’s amount of training in formal reasoning procedures"],
    answer: 3
  },
  {
    question: "Which of the following is a difference between everyday reasoning and formal reasoning?",
    options: ["In everyday reasoning, all premises are usually supplied","In everyday reasoning, there is typically one correct answer","In everyday reasoning, problems are solved as a means of achieving other goals","In formal reasoning, problems are not self-contained"],
    answer: 2
  }
];

weeks[12] = [
  {
    question: "The gambler’s fallacy is thought of as a special instance of:",
    options: ["framing","availability","belief in the number of small numbers","hindsight"],
    answer: 2
  },
  {
    question: "You have just spent 10 minutes trying to figure out the answer to a single problem on your math quiz. In spite of your lack of success, you continue to struggle, neglecting to continue on to other problems because you have already invested so much time and effort in this problem. You have fallen victim to:",
    options: ["the sunk cost effect","a framing effect","the anchor effect","availability bias"],
    answer: 0
  },
  {
    question: "Normative models of decision making describe:",
    options: ["how we ought to make decisions in realistic circumstances","ideal performance under ideal circumstances","what people actually do when they make decisions","cognitive illusions"],
    answer: 1
  },
  {
    question: "Past events seems “inevitable” due to the action of the:",
    options: ["framing effect","hindsight bias","gambler’s fallacy","availability heuristic"],
    answer: 1
  },
  {
    question: "Anita is blonde, extremely attractive and lives in an expensive condo. If we judge the probability of Anita’s being a model as quite high because she resembles our stereotype of a model, we are using the heuristic of:",
    options: ["representativeness","availability","framing","the law of small numbers"],
    answer: 0
  },
  {
    question: "The mental activities that takes place in choosing among alternatives are collectively called:",
    options: ["problem solving","inductive reasoning","deductive reasoning","decision making"],
    answer: 3
  },
  {
    question: "The tendency to seek out information that supports our current beliefs is called:",
    options: ["believability effect","content effect","confirmation bias","syllogistic reasoning"],
    answer: 2
  },
  {
    question: "Which of the following is NOT one of the five phases of decision making, according to Galotti.",
    options: ["Goal setting","Information gathering","Planning","Random choice"],
    answer: 3
  },
  {
    question: "According to psychologists, human decision making often falls short of optimality because:",
    options: ["There is not enough information available to make a rational decision","One cannot be rational under conditions of uncertainty","The information available overwhelms the cognitive processes","Rationality assumes a higher degree of intelligence than most people have"],
    answer: 2
  },
  {
    question: "The phase of decision making finding a way to organize information is called:",
    options: ["Goal setting","Planning","Structuring the decision","Evaluating"],
    answer: 2
  }
];

let randomizedWeeks = {};
let currentWeek = null;
let currentQuestionIndex = 0;
let selectedAnswers = [];
let quizFinished = false;
let autoAdvanceTimeout = null;

function shuffle(array) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function clearAutoAdvance() {
  if (autoAdvanceTimeout) {
    clearTimeout(autoAdvanceTimeout);
    autoAdvanceTimeout = null;
  }
}

function randomizeWeek(weekQuestions) {
  return weekQuestions.map((question) => {
    const indexedOptions = question.options.map((text, index) => ({
      text,
      isCorrect: index === question.answer,
    }));
    const shuffled = shuffle(indexedOptions);
    return {
      question: question.question,
      options: shuffled.map((item) => item.text),
      answer: shuffled.findIndex((item) => item.isCorrect),
    };
  });
}

function loadWeek() {
  const week = document.getElementById('weekSelect').value;
  const quizDiv = document.getElementById('quiz');
  const infoDiv = document.getElementById('questionInfo');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  currentWeek = week;
  currentQuestionIndex = 0;
  selectedAnswers = [];
  quizFinished = false;

  quizDiv.innerHTML = '';
  infoDiv.innerHTML = '';
  clearAutoAdvance();

  let sourceWeek;
  
  // Handle "All Weeks" option
  if (week === 'all') {
    const allQuestions = [];
    for (let i = 0; i <= 12; i++) {
      allQuestions.push(...weeks[i]);
    }
    // Shuffle the questions array
    sourceWeek = shuffle(allQuestions);
  } else {
    sourceWeek = weeks[week];
  }
  
  if (!sourceWeek) {
    quizDiv.innerHTML = 'No questions added yet.';
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  randomizedWeeks[week] = randomizeWeek(sourceWeek);

  prevBtn.disabled = true;
  nextBtn.disabled = false;
  nextBtn.innerText = 'Next';
  renderQuestion();
}

function renderQuestion() {
  const quizDiv = document.getElementById('quiz');
  const infoDiv = document.getElementById('questionInfo');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const weekQuestions = randomizedWeeks[currentWeek];

  if (!weekQuestions) return;
  quizFinished = false;

  const question = weekQuestions[currentQuestionIndex];
  const selected = selectedAnswers[currentQuestionIndex];

  quizDiv.innerHTML = '';
  const qDiv = document.createElement('div');
  qDiv.innerHTML = `<h3>${currentQuestionIndex + 1}. ${question.question}</h3>`;

  question.options.forEach((option, i) => {
    const btn = document.createElement('button');
    btn.innerText = option;
    btn.onclick = function () {
      selectedAnswers[currentQuestionIndex] = i;
      clearAutoAdvance();
      renderQuestion();
      autoAdvanceTimeout = setTimeout(() => {
        if (!quizFinished) {
          changeQuestion(1);
        }
      }, 2000);
    };

    if (selected !== undefined) {
      if (i === question.answer) {
        btn.classList.add('correct');
      } else if (i === selected) {
        btn.classList.add('wrong');
      }
    }

    qDiv.appendChild(btn);
  });

  quizDiv.appendChild(qDiv);
  infoDiv.innerHTML = `<div class="progress">Question ${currentQuestionIndex + 1} of ${weekQuestions.length}</div>`;

  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.disabled = false;
  nextBtn.innerText = currentQuestionIndex === weekQuestions.length - 1 ? 'Finish' : 'Next';
}

function changeQuestion(delta) {
  clearAutoAdvance();
  const weekQuestions = randomizedWeeks[currentWeek];
  if (!weekQuestions) return;

  if (quizFinished && delta > 0) {
    loadWeek();
    return;
  }

  const nextIndex = currentQuestionIndex + delta;
  if (delta > 0 && currentQuestionIndex === weekQuestions.length - 1) {
    showResult();
    return;
  }

  if (nextIndex < 0 || nextIndex >= weekQuestions.length) return;

  currentQuestionIndex = nextIndex;
  renderQuestion();
}

function showResult() {
  clearAutoAdvance();
  const quizDiv = document.getElementById('quiz');
  const infoDiv = document.getElementById('questionInfo');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const weekQuestions = randomizedWeeks[currentWeek];

  const score = weekQuestions.reduce((total, question, index) => {
    return total + (selectedAnswers[index] === question.answer ? 1 : 0);
  }, 0);
 
  quizDiv.innerHTML = `
    <div class="result-card">
      <h3>Quiz complete</h3>
      <p>You scored <strong>${score}</strong> out of <strong>${weekQuestions.length}</strong>.</p>
      <p>Pick another week or click Restart to try again.</p>
    </div>
  `;

  infoDiv.innerHTML = '';
  prevBtn.disabled = false;
  nextBtn.innerText = 'Restart';
  quizFinished = true;
}

function fillWeekDropdown() {
  const weekSelect = document.getElementById('weekSelect');
  
  // Add "All Weeks" option
  const allOpt = document.createElement('option');
  allOpt.value = 'all';
  allOpt.text = 'All Weeks (All 130 Questions)';
  weekSelect.appendChild(allOpt);
  
  for (let i = 0; i <= 12; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.text = 'Week ' + (i + 1);
    weekSelect.appendChild(opt);
  }
}

fillWeekDropdown();


