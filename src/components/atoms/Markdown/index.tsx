import ReactMarkdown from "react-markdown";
import { Box } from "@mui/material";

export interface MarkdownProps {
  content: string;
  width?: string;
}

export default function Markdown({ content, width = '100%' }: MarkdownProps) {
  return (
    <Box
      sx={{
        maxWidth: width,
        typography: 'body1',
        fontFamily: 'Inter, sans-serif',
        fontSize: '1.1rem',
        lineHeight: 1.8,
        color: 'var(--brown)',
        '& h1, & h2, & h3': {
          fontFamily: 'Outfit, sans-serif',
          color: 'var(--brown)',
          mt: 4,
          mb: 2
        },
        '& p': {
          mb: 2
        },
        '& img': {
          maxWidth: '100%',
          height: 'auto',
          borderRadius: 2,
          my: 3,
          display: 'block',
          mx: 'auto'
        },
        '& blockquote': {
          borderLeft: '4px solid var(--yellow)',
          pl: 2,
          fontStyle: 'italic',
          my: 3,
          color: 'text.secondary'
        }
      }}
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </Box>
  );
}
