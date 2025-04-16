import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function QuestionList({ category, questions }) {
  const [openQuestions, setOpenQuestions] = useState(new Set());

  const toggleQuestion = (index) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(index)) {
      newOpenQuestions.delete(index);
    } else {
      newOpenQuestions.add(index);
    }
    setOpenQuestions(newOpenQuestions);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{category} Interview Questions</h1>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50"
              onClick={() => toggleQuestion(index)}
            >
              <span className="text-lg font-medium text-gray-900">{question.question}</span>
              {openQuestions.has(index) ? (
                <ChevronUpIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openQuestions.has(index) && (
              <div className="px-6 py-4 bg-gray-50">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">{question.answer}</p>
                  {question.code && (
                    <SyntaxHighlighter language="javascript" style={docco}>
                      {question.code}
                    </SyntaxHighlighter>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionList;