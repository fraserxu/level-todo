# level-todo(WIP)

A simple todo-list app using leveldb

# example

To add a new list, just type `todo add "Finish reading oauth. link: https://oauth0.org" -l javascript`

```
$ todo add finish reading oauth. link: https://oauth0.org -l javascript
```

The `-l` is optional, but I do recommend to add it for easy seach and management.

Once it's done, you can mark it as done by `todo done 1`.

And you can also remove it if you don't like it by `todo rm 2`.

You can list all your lists with `todo list`:

```
$ todo list
1 2013-02-17 23:58 Finish reading oauth. link: https://oauth0.org "javascript" Done
2 2013-02-19 23:58 Buy some coffee "life" Next
3 2013-02-20 23:58 Finish reading oauth. link: https://oauth0.org "javascript" Next
```

# usage

```
usage:

  todo add CONTENT {-l LABEL}
    Add a new list. Optionally give a LABEL.

  todo rm ID
    Remove a list by the given ID.

  todo done ID
    Mark a list as done by the given ID.

  todo list {-l LABEL -s TYPE}
    Show all the todo list, filter by LABEL, sort by TYPE(time, status).

  todo destroy
    Clear all the list.
```

# license

MIT
