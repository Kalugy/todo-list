
import { useRouter } from 'next/router';
import store from '../../app/store'
import { Provider } from 'react-redux'
import { TaskForm } from '../../components/TaskForm';



export default function Edit() {

    const router = useRouter();
    const { id } = router.query;

    return (
        <Provider store={store}>
      
            <>
                <h1>Edit</h1>
                <TaskForm name="edit" id={id}/>
            </>
        
        </Provider>
    )
  }
  