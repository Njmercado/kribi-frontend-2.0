import { Stack, Grid2 } from '@mui/material';
import { TeamMemberCard } from '../../molecules';
import { TeamMember } from '../../../constants/team.constant';

interface TeamSectionProps {
  members: TeamMember[];
}

export default function TeamSection({ members }: TeamSectionProps) {
  return (
    <Stack mt={10} gap={5}>
      <Grid2 container gap={4} justifyContent="center" columns={12}>
        {members.map((member, index) => (
          <Grid2 size={{ xs: 8, sm: 6, md: 4, lg: 3 }} key={index}>
            <TeamMemberCard {...member} />
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  );
}
