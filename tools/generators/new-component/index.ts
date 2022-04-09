import {
  Tree,
  names,
  generateFiles,
  formatFiles,
  joinPathFragments,
} from '@nrwl/devkit';

interface NewComponentSchema {
  componentName: string;
  prj: string;
  dir: string;
}

export default async function (tree: Tree, schema: NewComponentSchema) {
  generateFiles(
    tree, // the virtual file system
    joinPathFragments(__dirname, './files'), // path to the file templates
    joinPathFragments('apps', schema.prj, 'components', schema.dir), // destination path of the files
    {
      ...schema,
      ...names(schema.componentName),
      tmpl: '',
    } // config object to replace variable in file templates
  );
  await formatFiles(tree);
}
