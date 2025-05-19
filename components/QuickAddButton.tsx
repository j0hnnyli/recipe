import React from 'react'
import AddOrRemoveRecipe from './AddOrRemoveRecipe'
import { cookies } from 'next/headers'

type Props = {
  id: string;
  img: string;
  name: string;
};

const QuickAddButton = async ( { id, img, name} : Props ) => {
  const cookie = await cookies();
  const user = cookie.get('session');

  return <AddOrRemoveRecipe id={id} img={img} name={name} user={user !== undefined}/>
}

export default QuickAddButton