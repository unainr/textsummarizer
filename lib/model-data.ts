export interface ModelCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  iconColor: string;
  tasks: string[];
  models: string[];
  sampleText: string;
}

export const modelCards: ModelCard[] = [
  {
    id: 'medical-llm',
    title: 'Medical Large Language Models',
    description: 'Explore the use of Medical Large Language Models for tasks like Text Summarization, Generation, and Question Answering in healthcare contexts.',
    iconName: 'Brain',
    iconColor: 'text-blue-600',
    tasks: ['Summarizer', 'Generator', 'Question Answering', 'Classification'],
    models: ['summarizer_clinical_jsl', 'generator_medical_v2', 'qa_clinical_bert', 'classifier_medical_specialty'],
    sampleText: 'OBJECTIVE: Vitals: Weight was 150 pounds and blood pressure 124/78. HEENT: Her throat was mildly erythematous without exudate. Nasal mucosa was erythematous and swollen. Only clear drainage was seen. TMs were clear. Neck: Supple without adenopathy. Lungs: Clear.'
  },
  {
    id: 'entity-detection',
    title: 'Detect Entities in Clinical Text',
    description: 'Identify 77 entity types including Symptom, Treatments, Test, Oncological, Procedure, Diabetes, and more from clinical documents.',
    iconName: 'Search',
    iconColor: 'text-green-600',
    tasks: ['Named Entity Recognition', 'Entity Linking', 'Relation Extraction'],
    models: ['ner_clinical_large', 'ner_oncology', 'ner_anatomy', 'ner_drugs'],
    sampleText: 'The patient was diagnosed with acute myocardial infarction. Prescribed metoprolol 25mg twice daily and atorvastatin 40mg once daily. Follow-up echocardiogram scheduled in 6 weeks.'
  },
  {
    id: 'oncology-extraction',
    title: 'Information Extraction in Oncology',
    description: 'Detect clinical entities and relationships related to cancer staging, grading, histology, tumor characteristics and treatment protocols.',
    iconName: 'FileText',
    iconColor: 'text-purple-600',
    tasks: ['Cancer Staging', 'Histology Classification', 'Treatment Extraction'],
    models: ['oncology_ner_posology', 'oncology_staging_classifier', 'tumor_characteristics_ner'],
    sampleText: 'Patient diagnosed with Stage IIIA adenocarcinoma of the lung. Tumor size 4.2cm with moderate differentiation. Recommended treatment: neoadjuvant chemotherapy with carboplatin and paclitaxel followed by surgical resection.'
  },
  {
    id: 'deidentification',
    title: 'De-identify Clinical Notes in Different Languages',
    description: 'De-identify and obfuscate protected health information (PHI) in English, Spanish, French, Italian, Portuguese, and German clinical texts.',
    iconName: 'Shield',
    iconColor: 'text-indigo-600',
    tasks: ['PHI Detection', 'Text Anonymization', 'Multi-language Support'],
    models: ['deidentify_large', 'deidentify_spanish', 'deidentify_french', 'deidentify_multilingual'],
    sampleText: 'Patient John Smith, DOB: 01/15/1980, was admitted on March 10, 2024. Contact: 555-123-4567. Address: 123 Main St, Springfield, IL. Insurance: Blue Cross Blue Shield Policy #BC123456789.'
  },
  {
    id: 'adverse-events',
    title: 'Adverse Drug Event Detection',
    description: 'Detect adverse reactions from drugs described in clinical text, online reviews, and social media posts using advanced NLP models.',
    iconName: 'AlertTriangle',
    iconColor: 'text-red-600',
    tasks: ['Adverse Event Detection', 'Sentiment Analysis', 'Risk Assessment'],
    models: ['ade_clinical_pipeline', 'drug_side_effects_classifier', 'pharmacovigilance_ner'],
    sampleText: 'Patient experienced severe nausea and dizziness after starting metformin 500mg. Discontinued medication after 3 days due to persistent gastrointestinal upset and reported fatigue.'
  },
  {
    id: 'patient-voice',
    title: 'Voice of the Patients',
    description: 'Extract and classify healthcare-related terms from documents written by patients such as questions, reviews, and social media posts.',
    iconName: 'MessageSquare',
    iconColor: 'text-teal-600',
    tasks: ['Sentiment Classification', 'Topic Extraction', 'Patient Feedback Analysis'],
    models: ['patient_sentiment_classifier', 'patient_topics_ner', 'healthcare_review_analyzer'],
    sampleText: 'I have been taking this medication for chronic pain for 6 months now. While it helps with the pain, I have noticed some side effects like drowsiness and weight gain. Overall, I would recommend it but with caution about the side effects.'
  }
];