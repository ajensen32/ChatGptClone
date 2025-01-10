<h1>AlexGPT - ChatGPT Clone Project</h1>

<h2>Project Description</h2>
<p>AlexGPT is a web-based chat application built using Next.js, TypeScript, and Tailwind CSS. It leverages OpenAI's GPT models to provide AI-driven chat capabilities. The application allows users to interact with different versions of the GPT model, store chat messages in Firebase Firestore, and manage user sessions with NextAuth.</p>

<h2>Installation Instructions</h2>
<ol>
<li>Clone the repository:
    <pre><code>git clone https://github.com/yourusername/ChatGptClone.git
cd ChatGptClone</code></pre>
</li>
<li>Install dependencies:
    <pre><code>npm install</code></pre>
</li>
<li>Set up environment variables:
    <p>Create a <code>.env.local</code> file in the root directory and add the following variables:</p>
    <pre><code>GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-client-secret
NEXTAUTH_URL=http://localhost:3000
FIREBASE_SERVICE_ACCOUNT_KEY=your-firebase-service-account-key
OPENAI_API_KEY=your-openai-api-key</code></pre>
</li>
<li>Run the development server:
    <pre><code>npm run dev</code></pre>
</li>
</ol>

<h2>Usage</h2>
<p>After setting up the project, you can use the application by signing in with your Google account, starting new chat sessions, selecting different GPT models, and interacting with the AI. The chat messages will be stored in Firebase Firestore, and you can view your chat history at any time.</p>

<h2>Features</h2>
<ul>
<li><strong>User Authentication</strong>: Users can sign in using their Google accounts via NextAuth.</li>
<li><strong>Chat Interface</strong>: Users can start new chats, send messages, and receive responses from the GPT model.</li>
<li><strong>Model Selection</strong>: Users can select different GPT models for their chat sessions.</li>
<li><strong>Message Storage</strong>: Chat messages are stored in Firebase Firestore, ensuring persistence and retrieval of chat history.</li>
<li><strong>Responsive Design</strong>: The application is styled using Tailwind CSS, providing a responsive and modern user interface.</li>
<li><strong>Real-time Updates</strong>: The chat interface updates in real-time using Firebase hooks.</li>
</ul>

<h2>Architecture Overview</h2>
<pre>
.gitignore
app/
chat/
globals.css
head.tsx
layout.tsx
page.tsx
components/
Chat.tsx
ChatInput.tsx
ChatRow.tsx
ClientProvider.tsx
Login.tsx
...
firebase.ts
firebaseAdmin.ts
lib/
next.config.mjs
package.json
pages/
postcss.config.mjs
README.md
tailwind.config.ts
tsconfig.json
typings.d.ts
</pre>

<h3>Key Files and Directories</h3>
<ul>
<li><strong>app/</strong>: Contains the main application components and pages.
    <ul>
        <li><strong>chat/[id]/page.tsx</strong>: Chat page for individual chat sessions.</li>
        <li><strong>globals.css</strong>: Global CSS styles using Tailwind CSS.</li>
        <li><strong>head.tsx</strong>: Head component for setting meta tags and the page title.</li>
        <li><strong>layout.tsx</strong>: Root layout component that includes the sidebar and session management.</li>
        <li><strong>page.tsx</strong>: Home page displaying application features and capabilities.</li>
    </ul>
</li>
<li><strong>components/</strong>: Reusable UI components.
    <ul>
        <li><strong>Chat.tsx</strong>: Component for displaying chat messages.</li>
        <li><strong>ChatInput.tsx</strong>: Component for inputting and sending chat messages.</li>
        <li><strong>ChatRow.tsx</strong>: Component for displaying individual chat rows in the sidebar.</li>
        <li><strong>ClientProvider.tsx</strong>: Client-side provider for toast notifications.</li>
        <li><strong>Login.tsx</strong>: Login component for user authentication.</li>
        <li><strong>Message.tsx</strong>: Component for displaying individual messages.</li>
        <li><strong>ModelSelection.tsx</strong>: Component for selecting different GPT models.</li>
        <li><strong>NewChat.tsx</strong>: Component for creating new chat sessions.</li>
        <li><strong>SessionProvider.tsx</strong>: Provider component for managing user sessions.</li>
        <li><strong>SideBar.tsx</strong>: Sidebar component displaying chat sessions and user information.</li>
    </ul>
</li>
<li><strong>lib/</strong>: Library files for interacting with OpenAI and Firebase.
    <ul>
        <li><strong>chatGPT.ts</strong>: Configuration for OpenAI API.</li>
        <li><strong>queryApi.ts</strong>: Function for querying the GPT model.</li>
    </ul>
</li>
<li><strong>pages/api/</strong>: API routes for handling backend logic.
    <ul>
        <li><strong>AskQuestion.ts</strong>: API route for sending chat prompts to the GPT model.</li>
        <li><strong>auth/[...nextauth].ts</strong>: API route for handling authentication with NextAuth.</li>
        <li><strong>GetEngines.ts</strong>: API route for fetching available GPT models.</li>
        <li><strong>hello.ts</strong>: Example API route.</li>
    </ul>
</li>
<li><strong>firebase.ts</strong>: Firebase client-side configuration.</li>
<li><strong>firebaseAdmin.ts</strong>: Firebase admin-side configuration.</li>
<li><strong>tailwind.config.ts</strong>: Tailwind CSS configuration.</li>
<li><strong>tsconfig.json</strong>: TypeScript configuration.</li>
<li><strong>package.json</strong>: Project dependencies and scripts.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
<li><strong>Next.js</strong>: React framework for server-side rendering and static site generation.</li>
<li><strong>TypeScript</strong>: Typed superset of JavaScript for type safety and better developer experience.</li>
<li><strong>Tailwind CSS</strong>: Utility-first CSS framework for styling.</li>
<li><strong>Firebase</strong>: Backend-as-a-Service for authentication and Firestore database.</li>
<li><strong>NextAuth</strong>: Authentication library for Next.js.</li>
<li><strong>OpenAI</strong>: API for interacting with GPT models.</li>
<li><strong>React</strong>: JavaScript library for building user interfaces.</li>
<li><strong>React Hot Toast</strong>: Library for toast notifications.</li>
<li><strong>React Select</strong>: Library for creating customizable select inputs.</li>
<li><strong>SWR</strong>: React hooks library for data fetching.</li>
</ul>

<h2>API Documentation</h2>
<ul>
<li><strong>AskQuestion.ts</strong>: API route for sending chat prompts to the GPT model.</li>
<li><strong>auth/[...nextauth].ts</strong>: API route for handling authentication with NextAuth.</li>
<li><strong>GetEngines.ts</strong>: API route for fetching available GPT models.</li>
<li><strong>hello.ts</strong>: Example API route.</li>
</ul>

<h2>Testing</h2>
<p>To run tests for the application, use the following command:</p>
<pre><code>npm test</code></pre>
<p>This will execute the test suite and provide feedback on the functionality and stability of the application.</p>

<p>Feel free to reach out if you have any questions or need further assistance!</p>
