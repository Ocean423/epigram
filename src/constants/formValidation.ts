import { isValidURL } from '@/lib/utils/isValidURL';
import { josa } from 'es-hangul';
import { RegisterOptions } from 'react-hook-form';

export type Field =
  | 'email'
  | 'password'
  | 'passwordConfirmation'
  | 'nickname'
  | 'epigramContent'
  | 'author'
  | 'referenceUrl'
  | string;

const FIELD_DICTIONARY: Record<Field, string> = {
  email: '이메일',
  password: '비밀번호',
  passwordConfirmation: '비밀번호 확인',
  nickname: '닉네임',
  epigramContent: '내용',
  author: '저자',
};
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_PATTERN = /^[A-Za-z\d!@#$%^&*]+$/;
const MAX_NICKNAME_LENGTH = 20;
const MIN_PASSWORD_LENGTH = 8;
export const MAX_EPIGRAM_CONTENT_LENGTH: number = 500;

const generateRequiredMessage = (name: Field): string => {
  return `${josa(FIELD_DICTIONARY[name], '을/를')} 입력해주세요.`;
};

const EMAIL_RULES: RegisterOptions = {
  required: generateRequiredMessage('email'),
  pattern: {
    value: EMAIL_PATTERN,
    message: '이메일 형식으로 작성해 주세요.',
  },
};

const NICKNAME_RULES: RegisterOptions = {
  required: generateRequiredMessage('nickname'),
  maxLength: {
    value: MAX_NICKNAME_LENGTH,
    message: `닉네임은 최대 ${MAX_NICKNAME_LENGTH}자까지 가능합니다.`,
  },
};

const PASSWORD_RULES: RegisterOptions = {
  required: generateRequiredMessage('password'),
  minLength: {
    value: MIN_PASSWORD_LENGTH,
    message: `비밀번호는 최소 ${MIN_PASSWORD_LENGTH}자 이상입니다.`,
  },
  pattern: {
    value: PASSWORD_PATTERN,
    message: '비밀번호는 숫자, 영문, 특수문자(!@#$%^&*)로만 가능합니다.',
  },
};
const EPIGRAM_CONTENT_RULES: RegisterOptions = {
  required: generateRequiredMessage('epigramContent'),
  maxLength: {
    value: MAX_EPIGRAM_CONTENT_LENGTH,
    message: `${MAX_EPIGRAM_CONTENT_LENGTH}자 이내로 입력해주세요`,
  },
};
const AUTHOR_RULES: RegisterOptions = {
  required: generateRequiredMessage('author'),
};
const REFERENCE_URL_RULES: RegisterOptions = {
  validate: value =>
    !value || isValidURL(value) || '올바른 URL 양식이 아닙니다.',
};

export const PASSWORD_CONFIRM_RULES = (
  passwordValue: string
): RegisterOptions => ({
  required: generateRequiredMessage('passwordConfirmation'),
  validate: value => value === passwordValue || '비밀번호가 일치하지 않습니다.',
});

const VALIDATION_RULES: Record<Field, RegisterOptions> = {
  email: EMAIL_RULES,
  password: PASSWORD_RULES,
  passwordConfirmation: {},
  nickname: NICKNAME_RULES,
  epigramContent: EPIGRAM_CONTENT_RULES,
  author: AUTHOR_RULES,
  referenceUrl: REFERENCE_URL_RULES,
};

export default VALIDATION_RULES;
