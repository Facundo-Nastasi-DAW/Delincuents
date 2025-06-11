export interface CommentData {
  id: string;
  plantId: string;
  parentId: string | null;
  author: string;
  content: string;
  likes: number;
  dislikes: number;
}


export const allComments: CommentData[] = [
  { id: "1", plantId: "1", parentId: null, author: "Laura", content: "¿Esta planta necesita mucha luz?", likes: 2, dislikes: 0 },
  { id: "2", plantId: "1", parentId: "1", author: "Carlos", content: "Yo la tengo en semisombra y va bien", likes: 3, dislikes: 0 },
  { id: "3", plantId: "1", parentId: null, author: "Ana", content: "¿Cuántas veces la regáis?", likes: 1, dislikes: 1 },
  { id: "4", plantId: "1", parentId: "3", author: "María", content: "Una vez por semana en verano", likes: 2, dislikes: 0 },

  { id: "5", plantId: "2", parentId: null, author: "Pedro", content: "La mía no crece mucho, ¿algún consejo?", likes: 0, dislikes: 1 },
  { id: "6", plantId: "2", parentId: "5", author: "Julia", content: "Prueba a trasplantarla", likes: 1, dislikes: 0 },

  { id: "7", plantId: "3", parentId: null, author: "Hugo", content: "¿Resiste heladas esta planta?", likes: 3, dislikes: 0 },
  { id: "8", plantId: "3", parentId: "7", author: "Rosa", content: "Sí, hasta -5°C sin problema", likes: 2, dislikes: 0 },

  { id: "9", plantId: "4", parentId: null, author: "Tania", content: "¿Es apta para interiores?", likes: 4, dislikes: 0 },
  { id: "10", plantId: "4", parentId: "9", author: "Mario", content: "Yo la tengo en el salón", likes: 1, dislikes: 1 },

  { id: "11", plantId: "5", parentId: null, author: "Nico", content: "¿Qué tierra es mejor para esta especie?", likes: 2, dislikes: 0 },

  { id: "12", plantId: "6", parentId: null, author: "Sara", content: "¿La floración es en primavera o verano?", likes: 0, dislikes: 0 },
  { id: "13", plantId: "6", parentId: "12", author: "Isa", content: "En primavera, si tiene buena luz", likes: 3, dislikes: 0 },

  { id: "14", plantId: "7", parentId: null, author: "Leo", content: "¿Puedo ponerla en maceta?", likes: 1, dislikes: 0 },

  { id: "15", plantId: "8", parentId: null, author: "Alba", content: "La mía se secó, ¿qué pudo pasar?", likes: 0, dislikes: 2 },
  { id: "16", plantId: "8", parentId: "15", author: "Irene", content: "Tal vez exceso de riego", likes: 2, dislikes: 0 },

  { id: "17", plantId: "9", parentId: null, author: "Pau", content: "¿Atrae insectos?", likes: 1, dislikes: 1 },

  { id: "18", plantId: "10", parentId: null, author: "Raúl", content: "¿Necesita mucho espacio en el jardín?", likes: 2, dislikes: 0 },

  { id: "19", plantId: "11", parentId: null, author: "Eva", content: "¿Es tóxica para gatos?", likes: 4, dislikes: 0 },

  { id: "20", plantId: "12", parentId: null, author: "Diego", content: "He visto manchas en las hojas, ¿es normal?", likes: 0, dislikes: 1 },
  { id: "21", plantId: "12", parentId: "20", author: "Carmen", content: "Puede ser exceso de sol", likes: 1, dislikes: 0 },

  { id: "22", plantId: "13", parentId: null, author: "Joan", content: "¿Se puede usar como seto?", likes: 2, dislikes: 0 },

  { id: "23", plantId: "14", parentId: null, author: "Clara", content: "¿Requiere poda frecuente?", likes: 1, dislikes: 1 },

  { id: "24", plantId: "15", parentId: null, author: "Marc", content: "¿Qué abono recomendáis?", likes: 3, dislikes: 0 },

  { id: "25", plantId: "16", parentId: null, author: "Rocío", content: "¿Puede crecer a la sombra?", likes: 2, dislikes: 0 },

  { id: "26", plantId: "17", parentId: null, author: "Álex", content: "¿Cuánto tarda en germinar?", likes: 0, dislikes: 0 },

  { id: "27", plantId: "18", parentId: null, author: "Jorge", content: "Tengo problemas con plagas, ¿algún consejo?", likes: 2, dislikes: 1 },
  { id: "28", plantId: "18", parentId: "27", author: "Marta", content: "Prueba jabón potásico", likes: 1, dislikes: 0 },

  { id: "29", plantId: "19", parentId: null, author: "Andrés", content: "La hoja cambia de color en invierno, ¿es normal?", likes: 2, dislikes: 0 },

  { id: "30", plantId: "20", parentId: null, author: "Lucía", content: "¿Cómo se propaga esta planta?", likes: 1, dislikes: 0 },

  { id: "31", plantId: "21", parentId: null, author: "Daniel", content: "¿Se puede tener con poca luz?", likes: 3, dislikes: 1 },

  { id: "32", plantId: "22", parentId: null, author: "Noa", content: "¿Qué tamaño alcanza?", likes: 1, dislikes: 0 },

  { id: "33", plantId: "23", parentId: null, author: "Adrián", content: "¿Crece rápido?", likes: 0, dislikes: 0 },

  { id: "34", plantId: "23", parentId: null, author: "Elena", content: "¿Puede vivir en climas fríos?", likes: 2, dislikes: 0 }
];
