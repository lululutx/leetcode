public List<EConsEngyDay> madeTree(List<EConsEngyDay> list){
  List<EConsEngyDay> ChildIndustryEngyList = new ArrayList<EConsEngyDay>();
  for(int i=0; i <list.size();i++) {
   ChildIndustryEngyList = AddChildren(list.get(i),ChildIndustryEngyList);
  }
  return ChildIndustryEngyList;
 }
 //加节点
 public List<EConsEngyDay> AddChildren(EConsEngyDay m,List<EConsEngyDay> list){
  if(m.getUpNodeCode() == null) {
   list.add(m);
   return list;
  }
  for(int i=0;i<list.size();i++) {
   //m.getNodeCode()
   if (list.get(i).getNodeCode().equals(m.getUpNodeCode())){
    //m.getChildren()
    if(list.get(i).getChildren() == null) {
     List<EConsEngyDay> l = new ArrayList<EConsEngyDay>();
     l.add(m);
     list.get(i).setChildren(l);
    }else {
     list.get(i).getChildren().add(m);
    }
    return list;
   }else if(list.get(i).getChildren() != null) {
    AddChildren(m,list.get(i).getChildren());
   }
  }
  return list;
 }