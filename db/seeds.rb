role_list = [
  [ "HR", 1 ],
  [ "Company", 2 ],
  [ "Professional", 3 ]
]

role_list.each do |role_name, id|
  role =  Role.find_by_id(id)
  if role
  	role.update( name: role_name)
  else
    Role.create( name: role_name )
  end
end