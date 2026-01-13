export type SkillCategory =
  | 'Languages'
  | 'Frontend'
  | 'Backend'
  | 'ML/AI'
  | 'Tools';

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string;
}

export const skills: Record<SkillCategory, Skill[]> = {
  'Languages': [
    { name: 'Python', category: 'Languages', logoKey: 'python' },
    { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
    { name: 'Kotlin', category: 'Languages', logoKey: 'kotlin' }
  ],
  'Frontend': [
    { name: 'React.js', category: 'Frontend', logoKey: 'react' },
    { name: 'Next.js', category: 'Frontend', logoKey: 'nextjs' },
    { name: 'HTML5', category: 'Frontend', logoKey: 'html5' },
    { name: 'CSS3/Tailwind', category: 'Frontend', logoKey: 'tailwindcss' },
    { name: 'React Native', category: 'Frontend', logoKey: 'react' }
  ],
  'Backend': [
    { name: 'Node.js', category: 'Backend', logoKey: 'nodejs' },
    { name: 'Express.js', category: 'Backend', logoKey: 'express' },
    { name: 'FastAPI', category: 'Backend', logoKey: 'fastapi' },
    { name: 'RESTful APIs', category: 'Backend', logoKey: 'javascript' },
    { name: 'GraphQL', category: 'Backend', logoKey: 'graphql' },
    { name: 'PostgreSQL', category: 'Backend', logoKey: 'postgresql' },
    { name: 'MongoDB', category: 'Backend', logoKey: 'mongodb' }
  ],
  'ML/AI': [
    { name: 'TensorFlow', category: 'ML/AI', logoKey: 'tensorflow' },
    { name: 'PyTorch', category: 'ML/AI', logoKey: 'pytorch' },
    { name: 'scikit-learn', category: 'ML/AI', logoKey: 'scikitlearn' },
    { name: 'Pandas', category: 'ML/AI', logoKey: 'pandas' },
    { name: 'NumPy', category: 'ML/AI', logoKey: 'numpy' },
    { name: 'OpenAI API', category: 'ML/AI', logoKey: 'python' },
    { name: 'LangChain', category: 'ML/AI', logoKey: 'python' },
    { name: 'Hugging Face', category: 'ML/AI', logoKey: 'python' },
    { name: 'NLP', category: 'ML/AI', logoKey: 'python' },
    { name: 'Computer Vision', category: 'ML/AI', logoKey: 'opencv' },
    { name: 'LLMs', category: 'ML/AI', logoKey: 'python' }
  ],
  'Tools': [
    { name: 'Git/GitHub', category: 'Tools', logoKey: 'git' },
    { name: 'Figma', category: 'Tools', logoKey: 'figma' },
    { name: 'Postman', category: 'Tools', logoKey: 'javascript' },
    { name: 'VS Code', category: 'Tools', logoKey: 'vscode' },
    { name: 'Docker', category: 'Tools', logoKey: 'docker' },
    { name: 'Firebase', category: 'Tools', logoKey: 'firebase' }
  ]
};

export const getAllSkills = () => {
  return Object.values(skills).flat();
};

export const getCategories = () => {
  return Object.keys(skills) as SkillCategory[];
};