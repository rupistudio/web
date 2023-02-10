export function getServicePathFromId(id: string) {
  return id.split('.')[0]?.replace('_content', '');
}
