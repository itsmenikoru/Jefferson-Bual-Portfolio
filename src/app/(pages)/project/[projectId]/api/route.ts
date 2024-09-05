import { project_details } from '@/app/_lib/db';

export async function GET(
  _request: Request,
  { params }: { params: { projectId: string } }
) {
  const project = project_details.find(
    (project) => project.id === parseInt(params.projectId)
  );

  //   const response = {
  //     project_details,
  //   };
  return Response.json(project);
}
