import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  getUser: User;
  getUserBooks: GetUserBooksResponse;
  getUserBook: GetUserBookResponse;
};


export type QueryGetUserArgs = {
  email: Scalars['String'];
};


export type QueryGetUserBookArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  email: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type GetUserBooksResponse = {
  __typename?: 'GetUserBooksResponse';
  error?: Maybe<Scalars['String']>;
  books?: Maybe<Array<Book>>;
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['Float'];
  title: Scalars['String'];
  author: Scalars['String'];
  owner: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type GetUserBookResponse = {
  __typename?: 'GetUserBookResponse';
  error?: Maybe<Scalars['String']>;
  book?: Maybe<BookHighlights>;
};

export type BookHighlights = {
  __typename?: 'BookHighlights';
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Section>>;
};

export type Section = {
  __typename?: 'Section';
  sectionHeading?: Maybe<Scalars['String']>;
  sectionNotes?: Maybe<Array<Note>>;
};

export type Note = {
  __typename?: 'Note';
  note?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: ChangePasswordResponse;
  resetPassword: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  saveBook: AddBookResponse;
};


export type MutationChangePasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: RegisterInput;
};


export type MutationLoginArgs = {
  options: LoginInput;
};


export type MutationSaveBookArgs = {
  book: BookInput;
};

export type ChangePasswordResponse = {
  __typename?: 'ChangePasswordResponse';
  errors?: Maybe<Array<FieldError>>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AddBookResponse = {
  __typename?: 'AddBookResponse';
  error?: Maybe<Scalars['String']>;
  book?: Maybe<Book>;
};

export type BookInput = {
  title: Scalars['String'];
  author: Scalars['String'];
  sections: Array<SectionInput>;
};

export type SectionInput = {
  sectionHeading: Scalars['String'];
  sectionNotes: Array<HighlightInput>;
};

export type HighlightInput = {
  note: Scalars['String'];
};

export type FieldErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email'>
);

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'ChangePasswordResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type LoginMutationVariables = Exact<{
  options: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type ResetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'resetPassword'>
);

export type SaveBookMutationVariables = Exact<{
  book: BookInput;
}>;


export type SaveBookMutation = (
  { __typename?: 'Mutation' }
  & { saveBook: (
    { __typename?: 'AddBookResponse' }
    & Pick<AddBookResponse, 'error'>
    & { book?: Maybe<(
      { __typename?: 'Book' }
      & Pick<Book, 'title' | 'author'>
    )> }
  ) }
);

export type GetUserBookQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserBookQuery = (
  { __typename?: 'Query' }
  & { getUserBook: (
    { __typename?: 'GetUserBookResponse' }
    & Pick<GetUserBookResponse, 'error'>
    & { book?: Maybe<(
      { __typename?: 'BookHighlights' }
      & Pick<BookHighlights, 'title' | 'author'>
      & { sections?: Maybe<Array<(
        { __typename?: 'Section' }
        & Pick<Section, 'sectionHeading'>
        & { sectionNotes?: Maybe<Array<(
          { __typename?: 'Note' }
          & Pick<Note, 'note'>
        )>> }
      )>> }
    )> }
  ) }
);

export type GetUserBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserBooksQuery = (
  { __typename?: 'Query' }
  & { getUserBooks: (
    { __typename?: 'GetUserBooksResponse' }
    & Pick<GetUserBooksResponse, 'error'>
    & { books?: Maybe<Array<(
      { __typename?: 'Book' }
      & Pick<Book, 'id' | 'title' | 'author'>
    )>> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export const FieldErrorFragmentDoc = gql`
    fragment FieldError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  email
}
    `;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $password: String!) {
  changePassword(token: $token, password: $password) {
    errors {
      field
      message
    }
  }
}
    `;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($options: LoginInput!) {
  login(options: $options) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!) {
  register(options: {email: $email, password: $password}) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const ResetPasswordDocument = gql`
    mutation ResetPassword($email: String!) {
  resetPassword(email: $email)
}
    `;

export function useResetPasswordMutation() {
  return Urql.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument);
};
export const SaveBookDocument = gql`
    mutation SaveBook($book: BookInput!) {
  saveBook(book: $book) {
    error
    book {
      title
      author
    }
  }
}
    `;

export function useSaveBookMutation() {
  return Urql.useMutation<SaveBookMutation, SaveBookMutationVariables>(SaveBookDocument);
};
export const GetUserBookDocument = gql`
    query GetUserBook($id: String!) {
  getUserBook(id: $id) {
    error
    book {
      title
      author
      sections {
        sectionHeading
        sectionNotes {
          note
        }
      }
    }
  }
}
    `;

export function useGetUserBookQuery(options: Omit<Urql.UseQueryArgs<GetUserBookQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUserBookQuery>({ query: GetUserBookDocument, ...options });
};
export const GetUserBooksDocument = gql`
    query GetUserBooks {
  getUserBooks {
    error
    books {
      id
      title
      author
    }
  }
}
    `;

export function useGetUserBooksQuery(options: Omit<Urql.UseQueryArgs<GetUserBooksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUserBooksQuery>({ query: GetUserBooksDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};